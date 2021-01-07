import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable, of } from 'rxjs';
import { switchMap, take, map, first } from 'rxjs/operators';
import { DbService } from '../../_services/db/db.service';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User, Role } from 'src/app/_models/firebase.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate {
  user$: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private db: DbService,
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      }),
    );
  }

  /**
   * Pobiera informacje o zalogowanym użytkowniku
   *
   * @returns Promise
   */
  getUser() {
    return this.user$.pipe(first()).toPromise();
  }

  /**
   * Sprawdza na podstawie danych dostarczanych z tablicy routingu
   * czy użytkownik posiada uprawnienia pozwalające na dostęp do żądanego widoku.
   *
   * @param route   ActivatedRouteSnapshot
   * @param state   RouterStateSnapshot
   * @returns       Boolean
   */
  public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const user = await this.getUser();
    if (user) {
      if (route.data.roles && (await this.hasRole(route.data.roles)) === false) {
        this.signOut();
        return false;
      }
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  /**
   * Sprawdza, czy użytkownik posiada żądaną przez nas rolę.
   *
   * @param role    Rola, o którą pytamy
   * @returns       Boolean
   */
  async hasRole(roles: Role[]): Promise<boolean> {
    const user = await this.getUser();
    if (user) {
      return roles.some((role) => user.roles.includes(role));
    }
  }

  /**
   * Aktualizuje informacje o koncie użytkownika
   */
  public async updateUserData(user: User, geoIP: object) {
    // Sets user data to firestore on login

    const data: User = {
      unreadMessages: 0,
      unreadNotifications: 0,
      uid: user.uid,
      email: user.email,
      displayName: 'Anonim',
      avatarURL: '',
      emailVerified: user.emailVerified,
      parish: '',
      roles: [],
      settings: {
        notifications: {
          center: {
            commentPublished: true,
            intentionFulfilled: true,
            intentionPublished: true,
            newArticle: true,
            newBlogPost: true,
            newComment: true,
            newIntentionFromObservedTag: true,
            newMessage: true,
            newParishioner: true,
            newPatron: true,
            newPrayer: true,
            newTestimony: true,
            thanksForPrayer: true,
            thanksForTestimony: true,
          },
          email: {
            commentPublished: false,
            intentionFulfilled: false,
            intentionPublished: false,
            newArticle: false,
            newBlogPost: false,
            newComment: false,
            newIntentionFromObservedTag: false,
            newMessage: false,
            newParishioner: false,
            newPatron: false,
            newPrayer: false,
            newTestimony: false,
            thanksForPrayer: false,
            thanksForTestimony: false,
          },
          push: {
            commentPublished: true,
            intentionFulfilled: true,
            intentionPublished: true,
            newArticle: true,
            newBlogPost: true,
            newComment: true,
            newIntentionFromObservedTag: true,
            newMessage: true,
            newParishioner: true,
            newPatron: true,
            newPrayer: true,
            newTestimony: true,
            thanksForPrayer: true,
            thanksForTestimony: true,
          },
        },
      },
    };

    //return this.db.update(`users/${user.uid}`, data)

    this.db.update(`users/${user.uid}`, data).then(() => {
      this.updateUserGeoIP(user, geoIP);
    });
  }

  /**
   * Aktualizuje dane geoIP użytkownika
   */
  updateUserGeoIP(user: User, geoIP: object) {
    this.db.update(`users/${user.uid}/geoIP`, geoIP);

    //const userRef: AngularFirestoreCollection = this.afs.collection(`users/${user.uid}/geoIP`);
    //return userRef.add(geoIP);
  }

  /**
   * Wylogowuje użytkownika
   */
  async signOut() {
    await this.afAuth.signOut();
    return this.router.navigate(['/']);
  }
}
