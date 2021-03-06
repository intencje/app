import { Component, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { User, Intention, Comment, Tags, PrayingData, Prayers, Patrons } from 'src/app/_models/firebase.model';
import { DbService } from '../../_services/db/db.service';
import { ToolsService } from 'src/app/_services/tools/tools.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { CustomValidators } from '../../_models/custom-validators.model';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';

@Component({
  selector: 'app-intention-card',
  templateUrl: './intention-card.component.html',
  styleUrls: ['./intention-card.component.scss'],
})
export class IntentionCardComponent {
  @Input() intention: Intention;
  @Input() showProfileDetialsOnClick = true;
  @Input() type: string;
  @Input() dataSource: string;
  private unsubscribe = new Subject();
  public intentions$: Observable<Intention[]>;
  public prayers$: Observable<Prayers[]>;
  public patrons$: Observable<Patrons[]>;
  public comments$: Observable<Comment[]>;
  public tags = [];
  recordOfThanks = [];
  iPrayForThisButtonClicked = false;

  objectKeys = Object.keys;

  constructor(
    private router: Router,
    public auth: AuthService,
    private db: DbService,
    private tools: ToolsService,
    public dialog: MatDialog,
    private afs: AngularFirestore,
  ) {}

  /*
   * Launches a popup with a button to delete the intention.
   */

  intentionDeleteDialog(): void {
    const dialogRef = this.dialog.open(IntentionDeleteDialog, {
      data: { title: this.intention.title, id: this.intention.id },
    });
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((id) => {
        this.db.update(`intentions/${this.intention.id}`, { status: 'trashed' }).then(() => {
          if (id === this.intention.id) {
            this.tools.reloadAfterAction();
            this.tools.presentToast({ message: 'Intencja została usunięta' });
          }
        });
      });
  }

  /*
   * Launches a popup with a button to change the status of the intention to "Fulfilled".
   */
  intentionSetFulfilledDialog(): void {
    const dialogRef = this.dialog.open(IntentionSetFulfilledDialog, {
      data: { title: this.intention.title, id: this.intention.id },
    });
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((id) => {
        this.db.update(`intentions/${this.intention.id}`, { status: 'fulfilled' }).then(() => {
          if (id === this.intention.id) {
            this.tools.reloadAfterAction('/spelnione');
            this.tools.presentToast({
              message: 'Chwała Panu!',
              ctaText: 'PODZIEL SIĘ ŚWIADECTWEM',
              ctaURL: '/swiadectwa/dodaj',
              duration: 20000,
            });
          }
        });
      });
  }

  /**
   * Operating the "I pray" button
   * @param user Logged in user that is praying
   * @param intentionId ID of the intention that user is praying for
   */

  async iPrayForThis(user: User, intentionId: string): Promise<void> {
    const prayingData: PrayingData = {
      displayName: user.displayName,
      date: new Date(),
      thanked: false,
    };

    const batch = this.afs.firestore.batch();
    const intention = this.db.docRef(`intentions/${intentionId}`);
    batch.update(intention, { praying: this.db.arrayUnion(user.uid) });
    batch.update(intention, { [`prayingData.${user.uid}`]: prayingData });

    batch
      .commit()
      .then(() => {
        this.iPrayForThisButtonClicked = true;
        if (this.dataSource === 'router') {
          if (typeof this.intention.prayingData != 'undefined') {
            Object.assign(this.intention.prayingData, {
              temporaryKey: {
                prayingData,
              },
            });
          } else {
            this.intention.prayingData = [prayingData];
          }
        }
        this.tools.presentToast({ message: 'Autor/ka intencji poinformowany/a' });
      })
      .catch((err) => {
        console.log(err); // Bugtracker
      });
  }

  /*
   * Launches a popup with a button to change the status of the intention to "Stale".
   */
  intentionSetStaleDialog(): void {
    const dialogRef = this.dialog.open(IntentionSetStaleDialog, {
      data: { title: this.intention.title, id: this.intention.id },
    });
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((id) => {
        this.db.update(`intentions/${this.intention.id}`, { status: 'stale' }).then(() => {
          if (id === this.intention.id) {
            this.tools.reloadAfterAction('/moje');
            this.tools.presentToast({ message: 'Intencja oznaczona jako nieaktualna' });
          }
        });
      });
  }

  /*
   * Launches a popup with the possibility of adding a comment to the intention.
   */
  intentionAddCommentDialog(): void {
    this.dialog.open(IntentionAddCommentDialog, {
      width: '450px',
      data: { title: this.intention.title, id: this.intention.id },
    });
  }

  /**
   * Saves information about about thanks for the prayer for a given intention in a database. Triggered by "Thank" button.
   * @param  {string} prayerID
   * @param  {string} intentionId
   * @returns Promise
   */

  //    <ng-container *ngIf="intention.can_pray && this.prayersProvider.isPraying.indexOf(intention.id) == -1" text-center>
  //    <button ion-button small (click)="this.prayersProvider.setPrayer(intention.id)">
  //      <section class="button-inner" *ngIf="this.prayersProvider.showSpinner.indexOf(intention.id) == -1">
  //        <span>MODLĘ SIĘ</span>
  //        <span class="counter">{{intention.prayers}}</span>
  //      </section>
  //      <section *ngIf="this.prayersProvider.showSpinner.indexOf(intention.id) > -1">
  //        <ion-spinner name="crescent"></ion-spinner>
  //      </section>
  //    </button>
  //  </ng-container>

  async thankYouForPraying(prayerID: string, intentionId: string): Promise<void> {
    await this.afs
      .doc(`intentions/${intentionId}`)
      .update({ [`prayingData.${prayerID}.thanked`]: true })
      .then(() => {
        this.recordOfThanks.push(prayerID);

        this.tools.presentToast({ message: 'Podziękowanie przesłane' });
      });
  }

  /**
   * Loads data for each tab of intention details. By checking typeof in each case data is loaded only once per click.
   * @param tab Index of a selected tab
   * @param tags Intention tags
   * @param date Intention date
   */
  loadTabData(tab: { index: number }, tags: Tags, date: DocumentData): void {
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

  getIntentionComments(intentionId: string): void {
    this.comments$ = this.db.collection$(`intentions/${intentionId}/comments`, (ref) =>
      ref.where('status', '==', 'published'),
    );
  }
}

@Component({
  selector: 'intention-delete-dialog',
  templateUrl: 'intention-delete.dialog.html',
})
export class IntentionDeleteDialog {
  unsubscribe = new Subject();
  constructor(
    public dialogRef: MatDialogRef<IntentionDeleteDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string; title: string },
  ) {}
  ngOnDestroy(): void {
    this.unsubscribe.next();
  }
}

@Component({
  selector: 'intention-set-fulfilled.dialog',
  templateUrl: 'intention-set-fulfilled.dialog.html',
})
export class IntentionSetFulfilledDialog {
  unsubscribe = new Subject();
  constructor(@Inject(MAT_DIALOG_DATA) public data: { id: string; title: string }) {}
  ngOnDestroy(): void {
    this.unsubscribe.next();
  }
}

@Component({
  selector: 'intention-set-stale.dialog',
  templateUrl: 'intention-set-stale.dialog.html',
})
export class IntentionSetStaleDialog {
  unsubscribe = new Subject();
  constructor(@Inject(MAT_DIALOG_DATA) public data: { id: string; title: string }) {}
  ngOnDestroy(): void {
    this.unsubscribe.next();
  }
}

@Component({
  selector: 'intention-add-comment-dialog',
  templateUrl: 'intention-add-comment.dialog.html',
  styleUrls: ['intention-add-comment.dialog.scss'],
})
export class IntentionAddCommentDialog {
  unsubscribe = new Subject();

  public addIntentionCommentForm: FormGroup;
  private geoIP: Record<string, any>;
  constructor(
    public formBuilder: FormBuilder,
    public auth: AuthService,
    private db: DbService,
    private tools: ToolsService,
    @Inject(MAT_DIALOG_DATA) public data,
  ) {
    this.addIntentionCommentForm = formBuilder.group({
      comment: [
        '',
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(500),
          CustomValidators.cannotContainSwearwords,
        ],
      ],
    });
  }
  get form(): { [key: string]: AbstractControl } {
    return this.addIntentionCommentForm.controls;
  }

  async addIntentionComment(payload: { comment: string }, intentionId: string): Promise<any> {
    const comment: Comment = {
      content: payload.comment,
      status: 'draft',
      date: new Date(),
    };

    if (this.addIntentionCommentForm.valid) {
      this.db.update(`intentions/${intentionId}/comments`, comment).then(() => {
        this.tools.presentToast({ message: 'Komenatrz przekazany do moderacji' });
      });
    }
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
  }
}
