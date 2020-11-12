import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { BehaviorSubject, EMPTY, from, Observable, Subject } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';
import { catchError, finalize, switchMap, takeUntil } from 'rxjs/operators';

export interface FilesUploadMetadata {
  uploadProgress$: Observable<number>;
  downloadUrl$: Observable<string>;
}

@Injectable({
  providedIn: 'root',
})
export class ImageService implements OnDestroy {
  private unsubscribe = new Subject();
  downloadURL;

  constructor(private readonly storage: AngularFireStorage) {}

  private imageSource = new BehaviorSubject(null);
  currentImage = this.imageSource.asObservable();
  submitted = false;

  changeImage(image: string): void {
    this.imageSource.next(image);
  }

  deleteImage(): void {
    this.imageSource.next(null);
  }

  uploadImage(croppedImage: string, savePath: string): void {
    const file = croppedImage;
    const filePath = savePath;
    const fileRef = this.storage.ref(filePath);
    const task = fileRef.putString(file, 'data_url');

    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          const downloadURL = fileRef.getDownloadURL();
          downloadURL.subscribe((url) => {
            this.downloadURL = url;
          });
        }),
      )
      .pipe(takeUntil(this.unsubscribe))
      .subscribe();
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
  }
}
