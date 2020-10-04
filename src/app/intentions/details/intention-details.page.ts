import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeoService } from 'src/app/_services/seo/seo.service';
import { map, takeUntil, switchMap } from 'rxjs/operators';
import { Subscription, Observable, of, Subject } from 'rxjs';
import { Intention, Tags, Comment } from './../../_models/firebase.model';
import { Inject, PLATFORM_ID } from '@angular/core';
import { DbService } from '../../_services/db/db.service';
import { ScreenService } from 'src/app/_services/screen/screen.service';

@Component({
  selector: 'app-intention-details',
  templateUrl: './intention-details.page.html',
  styleUrls: ['./intention-details.page.scss'],
})
export class IntentionDetailsPage implements OnInit {
  private jsonLD = {
    '@context': 'https://schema.org',
    '@type': 'Project',
    name: 'Intencje.pl',
    logo: 'TODO',
    sameAs: ['https://www.facebook.com/intencjepl', 'https://twitter.com/intencjepl'],
  };

  public intention$: Observable<Intention>;
  public intentions$: Observable<Intention[]>;
  public comments$: Observable<Comment[]>;
  public prayers$: Observable<any>;
  public patrons$: Observable<any>;
  public tags = [];

  private subscription: Subscription;
  navigation: any;
  slug: string;
  private unsubscribe = new Subject();
  dataSource: string;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Record<string, unknown>,
    public readonly route: ActivatedRoute,
    private readonly seoService: SeoService,
    public db: DbService,
    private router: Router,
    public screenService: ScreenService,
  ) {
    this.navigation = this.router.getCurrentNavigation();
    this.slug = this.route.snapshot.paramMap.get('intention_slug');
  }

  ngOnInit(): void {
    this.getIntention();
  }

  /**
   * Pobiera dane intencji na podstawie sluga z URLa definiowanego w pliku routing'u.
   * Jeśli widok szczegółów intencji wywoływany jest z listy zbiorczej dane pobierane są z navigation.extras.state
   * Jeśli nie - wejście z linka lub z miejsca gdzie dane nie zostały wprowadzone do navigation.extras.state'a - dane intencji
   * pobierane są z bazy wraz z konwersja z tablicy obiektów na pojedyńczy obiekt.
   */
  getIntention(): void {
    if (typeof this.navigation !== 'undefined' && typeof this.navigation.extras.state == 'object') {
      this.intention$ = of(this.navigation.extras.state);
    } else {
      this.intention$ = this.db
        .collection$('intentions', (ref) => ref.where('slug', '==', this.slug).limit(1))
        .pipe(
          // Szukanie po kolekcji zwraca tablicę obiektów. Nam potrzebny jest obiekt
          map((data) => {
            if (data[0]) {
              return data[0];
            } else {
              this.router.navigate(['404'], { skipLocationChange: true });
            }
          }),
        );
      this.dataSource = 'db';
    }
  }

  getIntentionComments(intentionId: string): void {
    this.comments$ = this.db.collection$(`intentions/${intentionId}/comments`, (ref) =>
      ref.where('status', '==', 'published'),
    );
  }
  /**
   * Loads data for each tab of intention details. By checking typeof in each case data is loaded only once per click.
   * @param tab Index of a selected tab
   * @param tags Intention tags
   * @param date Intention date
   */
  loadTabData(tab: { index: number }, tags: Tags, date: Date): void {
    switch (tab.index) {
      case 1:
        if (typeof this.prayers$ === 'undefined' && tags)
          this.prayers$ = this.db.collection$('prayers', (ref) => ref.where('tags', 'array-contains-any', tags));
        break;
      case 2:
        if (typeof this.patrons$ === 'undefined' && tags)
          this.patrons$ = this.db.collection$('patrons', (ref) => ref.where('tags', 'array-contains-any', tags));
        break;
      case 3:
        if (typeof this.intentions$ === 'undefined' && tags && date)
          this.intentions$ = this.db.collection$('intentions', (ref) =>
            ref
              .where('tags', 'array-contains-any', tags)
              // W Firebase nie ma możliwości negacji w zapytaniu. Negacja potrzebna jest do wykluczenia
              // obecnej intencji z listy podobnych. Idziemy na kompromis i wyświetlamy te intencje,
              // które zostały dodane wcześniej.
              .where('date', '<', date),
          );
        break;
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    //this.seoService.removeLinkTag({ rel: 'amphtml' });
    //this.seoService.removeJSONLD();
  }
}
