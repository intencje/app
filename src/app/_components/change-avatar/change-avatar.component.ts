import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { ToolsService } from '../../_services/tools/tools.service';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
//import 'firebase/storage';
//import 'hammerjs';

@Component({
  selector: 'app-change-avatar',
  templateUrl: './change-avatar.component.html',
  styleUrls: ['./change-avatar.component.scss'],
})
export class ChangeAvatarComponent {
  @ViewChild('file') file: ElementRef;

  imgLoaded = false;
  loading: any;
  // Upload task
  task: AngularFireUploadTask;

  // Firestore data
  result$: Observable<any>;
  image: string;

  imageChangedEvent: any = '';
  croppedImage: string;
  fileChanged = false;

  constructor(
    private toolsService: ToolsService,
    private storage: AngularFireStorage,
    private afs: AngularFirestore,
  ) {}

  async closeModal() {
    //await this.modalController.dismiss(this.croppedImage);
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.fileChanged = true;
    console.log('plik zmieniony');
  }
  imageCropped(event: ImageCroppedEvent) {
    console.log('zdjecie przyciete');
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

  /**
   * Uruchamia loader informujący użytkownika o toczącym się procesie logowania
   */
  async showLoading(): Promise<void> {
    // this.loading = await this.loadingController.create({
    //   message: 'Logowanie...',
    // });
    // await this.loading.present();
  }

  startUpload(file: string) {
    // Show loader
    //this.showLoading();

    // const timestamp = new Date().getTime().toString();
    const docId = this.afs.createId();

    const path = `${docId}`;

    // Make a reference to the future location of the firestore document
    const photoRef = this.afs.collection('photos').doc(docId);

    this.result$ = photoRef.valueChanges().pipe(
      filter(data => !!data),
      tap(() => this.loading.dismiss()),
    );

    // The main task
    this.image = file;
    this.task = this.storage.ref(path).putString(this.image, 'data_url');
  }

  // ionViewWillEnter() {
  //   this.file.nativeElement.click();
  // }
}
