import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { AngularFireFunctions } from '@angular/fire/functions';
import { ToastController, Platform } from '@ionic/angular';
import { tap } from 'rxjs/operators';

// Fixing temporary bug in AngularFire
//import * as app from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class FcmService {
  token;

  constructor(
    private afMessaging: AngularFireMessaging,
    private fun: AngularFireFunctions,
    private toastController: ToastController,
    private platform: Platform,
  ) {}

  async makeToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 5000,
      position: 'top',
      //showCloseButton: true,
      //closeButtonText: 'dismiss'
    });
    toast.present();
  }

  getPermission() {
    // TODO try-catch, track refresh tokens -> https://firebase.google.com/docs/cloud-messaging/js/send-multiple
    let token$;
    token$ = this.getPermissionWeb();
    return token$.pipe(
      tap((token) => {
        this.token = token;
      }),
    );
  }

  private getPermissionWeb() {
    return this.afMessaging.requestToken;
  }

  private async getPermissionNative() {
    let token;

    return token;
  }

  listenToMessages() {
    let messages$;
    messages$ = this.afMessaging.messages;

    return messages$.pipe(
      tap((v) => this.showMessages(v)),
      tap((v) => console.log('FCM service', v)),
    );
  }

  private showMessages(payload) {
    let body;
    //body = payload.notification.body;
    body = 'payload.notification.body';
    this.makeToast(body);
  }

  sub(topic) {
    this.fun
      .httpsCallable('subscribeToTopic')({ topic, token: this.token })
      .pipe(tap((_) => this.makeToast(`subscribed to ${topic}`)))
      .subscribe();
  }

  unsub(topic) {
    this.fun
      .httpsCallable('unsubscribeFromTopic')({ topic, token: this.token })
      .pipe(tap((_) => this.makeToast(`unsubscribed from ${topic}`)))
      .subscribe();
  }
}
