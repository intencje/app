import { Component, OnInit } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { mergeMap, map, tap, takeUntil, throttleTime } from 'rxjs/operators';
import { SeoService } from '../_services/seo/seo.service';
import { environment } from '../../environments/environment';
import { Intention } from '../_models/firebase.model';
import { scan } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ScreenService } from '../_services/screen/screen.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DbService } from '../_services/db/db.service';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-intentions',
  templateUrl: 'intentions.page.html',
  styleUrls: ['./_css/intentions.page.scss', './_css/intentions.shell.scss'],
})
export class IntentionsPage implements OnInit {
  // Ilość intencji pobierana za jednym odczytem z bazy.
  batch = 10;
  // Flaga oznaczająca dojechanie do ostatniego elementu listy.
  theEnd = false;
  // Data uruchomienia komponentu. Do porównania z datami przychodzących elementów w celu wyświetlenia powiadomienia o nowych intencjach.
  startDate: number = Date.now();
  // Flaga pokazywania informacji o nowych elementach.
  showNotification = false;
  /**
   * Punkt w czasie do pobierania kolejnych paczek przy scroll'u. To jego aktualizcje o czas dodania ostatniej intencji (patrz HTML)
   * w pobieranej paczce uruchamiają pobieranie kolejnych. BehaviorSubject na start nie może być pusty stąd wyzerowany czas w definicji.
   */
  timelinePoint = new BehaviorSubject({ seconds: 0, nanoseconds: 0 });
  // Zbiornik na potrzeby generowania widoku w HTML
  intentionsList$: Observable<Intention[]>;
  // Flaga używana do pokazywania zaślepki w przypadku braku kontentu.
  noContent = false;
  private unsubscribe = new Subject();
  snack = null;

  constructor(
    private db: DbService,
    public readonly route: ActivatedRoute,
    private readonly seoService: SeoService,
    public screenService: ScreenService,
    private snackbar: MatSnackBar,
  ) {
    this.generateTimeline();
  }

  generateTimeline(): void {
    // Nasłuchuje zmian w timelinePoint i po ich wystąpieniu merguje nowe porcje intencji. Podstawowe źródło prawdy.
    const batchMap = this.timelinePoint.pipe(
      /**
       * Wycinamy nadmiar nadmiarowych zapytań do bazy, które mogą być triggerowane scroll'em
       */
      throttleTime(500),
      /**
       * Nie możemy użyć tu switchMap z uwagi na konieczność utrzymania subskrypcji wszystkich paczek danych.
       * Gdybyśmy użyli swicthMap tylko ostatnia paczka danych byłaby aktualizowana live z uwagi na subskrypcję.
       */
      mergeMap((n) => this.getBatch(n)),
      // Mergujemy kolejną porcję danych z obecnym stream'em.
      scan((acc, batch) => {
        return { ...acc, ...(batch as Intention[]) };
      }, {}),
      takeUntil(this.unsubscribe),
    );

    // Observable na potrzeby generowania widoku listy intencji
    this.intentionsList$ = batchMap.pipe(
      map((item) => {
        /* Do poprawnej obsługi intencji (edycja, usuwanie, komentowanie) potrzebujemy jej IDka.
         * Możemy go pozyskać z kluczy obiektów batchMap (naszego SSoT) konwertując je na elementy tablicy.
         * Tablice będą nam i tak potrzebne do sprawdzania ilości elementów, sortowania po dacie jak i samej prezentacji intencji na widoku.
         */
        const data: Intention[] = Object.entries(item).reduce((acc, [id, intention]) => {
          acc.push({ ...(intention as Intention), id });
          return acc;
        }, []);

        // Sprawdzamy czy mamy nad czym pracować
        if (data?.length > 0) {
          // Sortowanie elementów tablicy po dacie
          data.sort(function (a: Intention, b: Intention) {
            return b.date.toDate() - a.date.toDate();
          });
          // Jeśli w trakcie przeglądania intencji pojawiła się nowa pokaż powiadomienie o możliwości jego pokazania
          if (data[0].date.toDate() > this.startDate && this.snack == null) {
            this.snack = this.snackbar.open('Pojawiły się nowe intencje', 'ZOBACZ', {
              verticalPosition: 'top',
            });
            // Jeśli użytkownik chce zobaczyć nową intencję odśwież obecną listę poprzez przełączenie daty startowej
            this.snack.onAction().subscribe(() => {
              this.startDate = Date.now();
              // Odrobina polotu i finezji poprzez przescrollowanie listy o ile jest na to przestrzeń
              (function smoothscroll() {
                const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
                if (currentScroll > 0) {
                  window.requestAnimationFrame(smoothscroll); //TODO: isPlatformBrowser!
                  window.scrollTo(0, currentScroll - currentScroll / 8);
                }
              })();
            });
          }
          // Zwracamy efekt naszej pracy
          return data;
        } else {
          // Nie mamy czego pokazać - pokazujemy zaślępke na brak intencji.
          this.noContent = true;
        }
      }),
      takeUntil(this.unsubscribe),
    );
  }

  ngOnInit(): void {
    this.seoService.addJSONLD([
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Intencje.pl',
        url: `${environment.url}`,
        logo: '',
        sameAs: ['https://www.facebook.com/intencjepl', 'https://twitter.com/intencjepl'],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Intencje',
        operatingSystem: 'ANDROID',
        applicationCategory: 'https://schema.org/GameApplication',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.6',
          ratingCount: '8864',
        },
      },
    ]);
  }

  // Pobiera z bazy paczkę danych startując od starszych niż data podana w offset
  getBatch(pointInTime: { seconds: number; nanoseconds: number }): Observable<unknown> {
    return this.db
      .batch$('intentions', (ref) =>
        ref.where('status', '==', 'published').orderBy('date', 'desc').startAfter(pointInTime).limit(this.batch),
      )
      .pipe(
        tap((arr) => (arr.length ? null : (this.theEnd = true))),
        /* Aby w odpowiedniej kolejności i w niezawodny sposób prezentować stale aktualizowaną listę intencji mapujemy je do obiektu z kluczami
         * stanowiącymi jednocześnie ID intencji, które przydadzą nam się później. Takie rowiązanie pozwala nam potem aktualizować listę intencji
         * na podstawie kluczy, zamiast indeksu tablicy. To zapewnia nam brak duplikatów, które mogłyby się pojawić w trakcie aktualizacji listy.
         * Aby pozyskać IDki poszczególnych rekordów z Firebase można posłużyć się też metodą valueChanges({idField: 'nazwaID'}) biblioteki AngularFire.
         */
        map((arr) => {
          return arr.reduce((acc: any, cur: { payload: { doc: { id: any; data: () => any } } }) => {
            const id = cur.payload.doc.id;
            const data = cur.payload.doc.data();
            return { ...acc, [id]: data };
          }, {}); // -> mapowanie do obiektu
        }),
        takeUntil(this.unsubscribe),
      );
  }

  nextBatch(pointInTime: { seconds: number; nanoseconds: number }): Observable<unknown> {
    // Dajemy znać, że dobiliśmy dna
    if (this.theEnd) return;
    // Aktualizujemy punkt w czasie
    this.timelinePoint.next(pointInTime);
  }

  /*
   * Dzięki temu przy zmianie kolejności elementów listy lub zmiany ich zawartości w Firebase lista nie będzie renderowana na nowo.
   * Zmianie ulegną tylko wybrane elementy.
   */
  trackByIdx(i: number): number {
    return i;
  }

  // Sprzątamy
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.seoService.removeJSONLD();
    this.snack?.dismiss();
  }

  async show() {
    console.log('q');
    await Toast.show({
      text: 'Hello!',
    });
  }
}
