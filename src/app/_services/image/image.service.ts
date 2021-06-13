import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { BehaviorSubject, EMPTY, from, Observable, of, Subject } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';
import { catchError, finalize, map, switchMap, takeUntil } from 'rxjs/operators';

export interface FilesUploadMetadata {
  uploadProgress$: Observable<number>;
  downloadUrl$: Observable<string>;
}

@Injectable({
  providedIn: 'root',
})
export class ImageService implements OnDestroy {
  uploadProgress$ = new Observable<number>();

  private unsubscribe = new Subject();
  public downloadUrl = '';
  downloadUrl$: Observable<string>;
  isBase64Uploaded = false;

  constructor(private readonly storage: AngularFireStorage) {}

  private imageSource = new BehaviorSubject(null);
  currentImage = this.imageSource.asObservable();

  changeImage(image: string): void {
    this.imageSource.next(image);
  }

  deleteImage(): void {
    this.imageSource.next(null);
    this.isBase64Uploaded = false;
    this.downloadUrl$ = of(null);
  }

  uploadImage(croppedImage: string, savePath: string): void {
    this.downloadUrl$ = of(null);
    this.isBase64Uploaded = true;
    const file = croppedImage;
    const filePath = savePath;
    const fileRef = this.storage.ref(filePath);
    const task = fileRef.putString(file, 'data_url');

    this.uploadProgress$ = task.snapshotChanges().pipe(map((s) => (s.bytesTransferred / s.totalBytes) * 100));

    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadUrl$ = fileRef.getDownloadURL();
          this.downloadUrl$.subscribe((url) => {
            this.downloadUrl = url;
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
