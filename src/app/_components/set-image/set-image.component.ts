import { Component, Input, ElementRef, ViewChild, Inject } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import 'hammerjs';
import { ImageService } from '../../_services/image/image.service';

@Component({
  selector: 'app-set-image',
  templateUrl: './set-image.component.html',
  styleUrls: ['./set-image.component.scss'],
})
export class SetImageComponent {
  @Input() params: {
    title: string;
    savePath: string;
    type?: 'round' | 'square';
    resizeToWidth?: number;
    resizeToHeight?: number;
    imageQuality?: number;
    aspectRatio?: number;
  };

  @ViewChild('fileInput') fileInput: any;

  uploadProgress$: Observable<number>;
  submitted = false;
  unsubscribe = new Subject();
  croppedImage = '';

  constructor(public dialog: MatDialog, public image: ImageService) {}

  showCropperDialog(event): void {
    const dialogRef = this.dialog.open(CropperDialog, {
      data: { event: event, params: this.params },
    });
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data) => {
        data ? (this.croppedImage = data) : null;
        this.fileInput.nativeElement.value = '';
      });
  }
  deleteImage(): void {
    this.croppedImage = '';
    this.image.deleteImage();
  }
}
@Component({
  selector: 'cropper.dialog',
  templateUrl: './cropper.dialog.html',
  styleUrls: ['./set-image.component.scss'],
})
export class CropperDialog {
  imageChangedEvent: any = '';
  croppedImage: string;

  unsubscribe = new Subject();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private storage: AngularFireStorage,
    private afs: AngularFirestore,
    public dialog: MatDialog,
    public image: ImageService,
  ) {
    this.imageChangedEvent = data.event;
  }

  imageCropped(event: ImageCroppedEvent): void {
    this.croppedImage = event.base64;
    this.image.changeImage(this.croppedImage);
  }
  loadImageFailed(): void {
    console.log('ladowanie sie nie udalo');
  }
  deleteImage(): void {
    // TODO: Wyświetlaj toast w przypadku problemu z uploadem grafiki
    this.croppedImage = '';
    this.image.deleteImage();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }
}
