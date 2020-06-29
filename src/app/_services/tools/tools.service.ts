import { Injectable } from '@angular/core';
import { User } from '../../_models/firebase.model';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToolsService {
  constructor() {} //private storage: Storage,

  async presentToast(message: string, duration?: number) {
    // const toast = await this.toastCtrl.create({
    //   message,
    //   duration: duration ? duration : 15000,
    //   position: 'top',
    //   buttons: [
    //     // {
    //     //
    //     //   text: 'POMOC',
    //     //   handler: () => {
    //     //   }
    //     // },
    //     {
    //       text: 'OK',
    //       role: 'cancel',
    //     },
    //   ],
    // });
    // toast.present();
  }

  //   /**
  // 	 * W przypadku braku połączenia z Internetem wyświetla lokalny obrazek w zależności od wybranego typu.
  // 	 * @param event - przekazywany przez ionError z div
  // 	 */
  //   loadDefaultImage(event) {
  //     event.target.src = '/assets/icon/avatar.png';
  //   }

  //   // genruj observable z promise
  //   get(key: string): Observable<any> {
  //     return from(this.storage.get(key));
  //   }

  //   // Wyciagaj string z promise'a

  // //     public getStorageKey(key) {
  // //     let d: string;
  // //     this.storage.ready().then(() => {
  // //     this.storage.get(key).then(val => {
  // //       //console.log(val);
  // //       d = val;
  // //       console.log(d);

  // //     })
  // //     .catch((error) => {
  // //       console.error(error);
  // //       });
  // //     });
  // // //    console.log(d);

  // //     return d ? d : null;
  // //   }
}
