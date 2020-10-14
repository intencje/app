import { Component, Input, ElementRef, ViewChild, Inject } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import 'hammerjs';
//import 'firebase/storage';

@Component({
  selector: 'app-change-avatar',
  templateUrl: './change-avatar.component.html',
  styleUrls: ['./change-avatar.component.scss'],
})
export class ChangeAvatarComponent {
  @ViewChild('fileInput') fileInput: any;
  unsubscribe = new Subject();
  croppedImage = '';
  constructor(public dialog: MatDialog) {}

  showCropperDialog(event) {
    const dialogRef = this.dialog.open(CropperDialog, {
      data: { event: event },
    });
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data) => {
        data ? (this.croppedImage = data) : null;
        this.fileInput.nativeElement.value = '';
      });
  }
}
@Component({
  selector: 'cropper.dialog',
  templateUrl: './cropper.dialog.html',
  styleUrls: ['./change-avatar.component.scss'],
})
export class CropperDialog {
  imgLoaded = false;

  // Firestore data
  result$: Observable<any>;
  image: string;

  imageChangedEvent: any = '';
  croppedImage: string;

  unsubscribe = new Subject();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private storage: AngularFireStorage,
    private afs: AngularFirestore,
    public dialog: MatDialog,
  ) {
    this.imageChangedEvent = data.event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    //this.startUpload(this.croppedImage);
  }
  imageLoaded() {
    this.imgLoaded = true;
    console.log('zdjecie zaladowane');
  }
  cropperReady() {
    console.log('przycinak gotowy');
  }
  loadImageFailed() {
    console.log('ladowanie sie nie udalo');
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }
}
