import { Component, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { User, Intention, Role, Comment } from 'src/app/_models/firebase.model';
import { DbService } from '../../_services/db/db.service';
import { ToolsService } from 'src/app/_services/tools/tools.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidators } from '../../_models/custom-validators.model';
import { IntentionsPage } from 'src/app/intentions/intentions.page';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-intention-card',
  templateUrl: './intention-card.component.html',
  styleUrls: ['./intention-card.component.scss'],
})
export class IntentionCardComponent {
  @Input() intention: Intention;
  @Input() latest: any;
  @Input() showProfileDetialsOnClick = true;
  private unsubscribe = new Subject();

  constructor(
    private router: Router,
    public auth: AuthService,
    private db: DbService,
    private tools: ToolsService,
    public dialog: MatDialog,
    public intentionsPage: IntentionsPage,
    private snackbar: MatSnackBar,
  ) {}

  /*
   * Uruchamia popup z przyciskiem pozwalającym na usunięcie intencji.
   */
  intentionDeleteDialog(): void {
    const dialogRef = this.dialog.open(IntentionDeleteDialog, {
      data: { title: this.intention.title },
    });
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((title) => {
        this.db.update(`intentions/${this.intention.id}`, { status: 'trashed' }).then(() => {
          if (title == this.intention.title) {
            this.intentionsPage.generateTimeline();
            this.snackbar.open('Intencja została usunięta', 'OK', {
              verticalPosition: 'top',
              duration: 5000,
            });
          }
        });
      });
  }

  /*
   * Uruchamia popup z przyciskiem pozwalającym na zmianę statusu intencji na "Wysłuchana".
   */
  intentionChangeStatusDialog(): void {
    const dialogRef = this.dialog.open(IntentionChangeStatusDialog, {
      data: { title: this.intention.title },
    });
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((title) => {
        this.db.update(`intentions/${this.intention.id}`, { status: 'fulfilled' }).then(() => {
          if (title == this.intention.title) {
            this.intentionsPage.generateTimeline();
            const snack = this.snackbar.open('Chwała Panu!', 'PODZIEL SIĘ ŚWIADECTWEM', {
              verticalPosition: 'top',
              duration: 10000,
            });

            snack.onAction().subscribe(() => {
              this.router.navigateByUrl('/swiadectwa/dodaj');
            });
          }
        });
      });
  }

  /*
   * Uruchamia popup z możliwością dodania komentarza do intencji.
   */
  intentionAddCommentDialog(): void {
    this.dialog.open(IntentionAddCommentDialog, {
      width: '450px',
      data: { title: this.intention.title, id: this.intention.id },
    });
  }
}

@Component({
  selector: 'intention-delete-dialog',
  templateUrl: 'intention-delete.dialog.html',
})
export class IntentionDeleteDialog {
  unsubscribe = new Subject();
  constructor(public dialogRef: MatDialogRef<IntentionDeleteDialog>, @Inject(MAT_DIALOG_DATA) public data) {}
}

@Component({
  selector: 'intention-change-status-dialog',
  templateUrl: 'intention-change-status.dialog.html',
})
export class IntentionChangeStatusDialog {
  unsubscribe = new Subject();
  constructor(@Inject(MAT_DIALOG_DATA) public data) {}
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
    private snackbar: MatSnackBar,
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
  get form() {
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
        this.snackbar.open('Komentarz przekazany do moderacji', 'OK', {
          verticalPosition: 'top',
          duration: 5000,
        });
      });
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }
}
