import { Component, Input } from '@angular/core';
import { AuthService } from '../../_services/auth/auth.service';
import { Prayer, Tags, Prayers, Patrons, Intention } from '../../_models/firebase.model';
import { DbService } from '../../_services/db/db.service';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';

@Component({
  selector: 'app-prayer-card',
  templateUrl: './prayer-card.component.html',
  styleUrls: ['./prayer-card.component.scss'],
})
export class PrayerCardComponent {
  @Input() prayer: Prayer;
  @Input() type: string;
  @Input() dataSource: string;
  private unsubscribe = new Subject();
  public prayer$: Observable<Prayer[]>;
  public prayers$: Observable<Prayers[]>;
  public patrons$: Observable<Patrons[]>;
  public intentions$: Observable<Intention[]>;
  public tags = [];

  objectKeys = Object.keys;

  constructor(public auth: AuthService, private db: DbService) {}

  /**
   * Loads data for each tab of prayer details. By checking typeof in each case data is loaded only once per click.
   * @param tab Index of a selected tab
   * @param tags Prayer tags
   * @param date Prayer date
   */
  loadTabData(tab: { index: number }, tags: string[]): void {
    switch (tab.index) {
      case 0:
        if (typeof this.prayers$ === 'undefined' && tags)
          this.prayers$ = this.db.collection$('prayers', (ref) => ref.where('tags', 'array-contains-any', tags));
        break;
      case 1:
        if (typeof this.intentions$ === 'undefined' && tags)
          this.intentions$ = this.db.collection$('intentions', (ref) => ref.where('tags', 'array-contains-any', tags));
        break;
      case 2:
        if (typeof this.patrons$ === 'undefined' && tags)
          this.patrons$ = this.db.collection$('patrons', (ref) => ref.where('tags', 'array-contains-any', tags));
        break;
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }
}
