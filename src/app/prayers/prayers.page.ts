import { Component, OnInit } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { mergeMap, map, tap, takeUntil, throttleTime } from 'rxjs/operators';
import { SeoService } from '../_services/seo/seo.service';
import { environment } from '../../environments/environment';
import { Prayer } from '../_models/firebase.model';
import { scan } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ScreenService } from '../_services/screen/screen.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DbService } from '../_services/db/db.service';

@Component({
  selector: 'app-prayers',
  templateUrl: './prayers.page.html',
  styleUrls: ['./prayers.page.scss'],
})
export class PrayersPage implements OnInit {
  // Ilość modlitw pobierana za jednym odczytem z bazy.
  batch = 20;
  // Flaga oznaczająca dojechanie do ostatniego elementu listy.
  theEnd = false;
  // Data uruchomienia komponentu. Do porównania z datami przychodzących elementów w celu wyświetlenia powiadomienia o nowych modlitwach.
  startDate: number = Date.now();
  // Flaga pokazywania informacji o nowych elementach.
  showNotification = false;
  /**
   * Punkt w czasie do pobierania kolejnych paczek przy scroll'u. To jego aktualizcje o czas dodania ostatniej modlitw (patrz HTML)
   * w pobieranej paczce uruchamiają pobieranie kolejnych. BehaviorSubject na start nie może być pusty stąd wyzerowany czas w definicji.
   */
  timelinePoint = new BehaviorSubject({ seconds: 0, nanoseconds: 0 });
  // Zbiornik na potrzeby generowania widoku w HTML
  prayersList$: Observable<Prayer[]>;
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
    // Nasłuchuje zmian w timelinePoint i po ich wystąpieniu merguje nowe porcje modlitw. Podstawowe źródło prawdy.
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
        return { ...acc, ...(batch as Prayer[]) };
      }, {}),
      takeUntil(this.unsubscribe),
    );

    // Observable na potrzeby generowania widoku listy modlitw
    this.prayersList$ = batchMap.pipe(
      map((item) => {
        /* Do poprawnej obsługi modlitw (edycja, usuwanie, komentowanie) potrzebujemy jej IDka.
         * Możemy go pozyskać z kluczy obiektów batchMap (naszego SSoT) konwertując je na elementy tablicy.
         * Tablice będą nam i tak potrzebne do sprawdzania ilości elementów, sortowania po dacie jak i samej prezentacji modlitw na widoku.
         */
        const data: Prayer[] = Object.entries(item).reduce((acc, [id, prayer]) => {
          acc.push({ ...(prayer as Prayer), id });
          return acc;
        }, []);

        // Sprawdzamy czy mamy nad czym pracować
        if (data?.length > 0) {
          // Sortowanie elementów tablicy po dacie
          data.sort(function (a: Prayer, b: Prayer) {
            return b.date.toDate() - a.date.toDate();
          });
          // Jeśli w trakcie przeglądania modlitw pojawiła się nowa pokaż powiadomienie o możliwości jego pokazania
          if (data[0].date.toDate() > this.startDate && this.snack == null) {
            this.snack = this.snackbar.open('Pojawiły się nowe modlitwy', 'ZOBACZ', {
              verticalPosition: 'top',
            });
            // Jeśli użytkownik chce zobaczyć nową modlitwę odśwież obecną listę poprzez przełączenie daty startowej
            this.snack.onAction().subscribe(() => {
              this.startDate = Date.now();
              // Odrobina polotu i finezji poprzez przescrollowanie listy o ile jest na to przestrzeń
              (function smoothscroll() {
                const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
                //TODO: isPlatformBrowser!
                if (currentScroll > 0 && typeof window !== "undefined") {
                  window.requestAnimationFrame(smoothscroll); //TODO: isPlatformBrowser!
                  window.scrollTo(0, currentScroll - currentScroll / 8);
                }
              })();
            });
          }
          // Zwracamy efekt naszej pracy
          return data;
        } else {
          // Nie mamy czego pokazać - pokazujemy zaślępke na brak modlitw.
          this.noContent = true;
        }
      }),
      takeUntil(this.unsubscribe),
    );
  }

  ngOnInit(): void {
    // this.seoService.addJSONLD([
    //   {
    //     '@context': 'https://schema.org',
    //     '@type': 'Organization',
    //     name: 'Intencje.pl',
    //     url: 'https://intenche.pl',
    //     logo: '',
    //     sameAs: ['https://www.facebook.com/intencjepl', 'https://twitter.com/intencjepl'],
    //   },
    //   {
    //     '@context': 'https://schema.org',
    //     '@type': 'SoftwareApplication',
    //     name: 'Intencje',
    //     operatingSystem: 'ANDROID',
    //     applicationCategory: 'CommunicationApplication',
    //     aggregateRating: {
    //       '@type': 'AggregateRating',
    //       ratingValue: '4.7',
    //       ratingCount: '42',
    //     },
    //     offers: {
    //       '@type': 'Offer',
    //       price: '0',
    //       priceCurrency: 'PLN',
    //     },
    //   },
    // ]);
  }

  // Pobiera z bazy paczkę danych startując od starszych niż data podana w offset
  getBatch(pointInTime: { seconds: number; nanoseconds: number }): Observable<unknown> {
    return this.db
      .batch$('prayers', (ref) =>
        ref.where('status', '==', 'published').orderBy('date', 'desc').startAfter(pointInTime).limit(this.batch),
      )
      .pipe(
        tap((arr) => (arr.length ? null : (this.theEnd = true))),
        /* Aby w odpowiedniej kolejności i w niezawodny sposób prezentować stale aktualizowaną listę modlitw mapujemy je do obiektu z kluczami
         * stanowiącymi jednocześnie ID modlitw, które przydadzą nam się później. Takie rowiązanie pozwala nam potem aktualizować listę modlitw
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
    //this.seoService.removeJSONLD();
    this.snack?.dismiss();
  }
}
