import { Component, OnInit, ApplicationRef, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../_services/auth/auth.service';
import { ToolsService } from '../_services/tools/tools.service';
import { CustomValidators } from '../_models/custom-validators.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, catchError, takeUntil } from 'rxjs/operators';
import { of, Subject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private unsubscribe = new Subject();
  returnUrl: string;
  loading = false;
  emailSent = false;
  submitted = false;
  geoIP: object = {};
  loginRegisterForm: FormGroup;
  showMessage = false;
  email: string;

  constructor(
    public auth: AuthService,
    private afAuth: AngularFireAuth,
    public formBuilder: FormBuilder,
    private router: Router,
    private tools: ToolsService,
    public readonly route: ActivatedRoute,
    private http: HttpClient,
    private ref: ApplicationRef,
    @Inject(PLATFORM_ID) private platformId: Record<string, unknown>,
  ) {
    this.loginRegisterForm = formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          ),
          Validators.maxLength(254),
          CustomValidators.cannotContainSwearwords,
        ],
      ],
    });
  }

  ngOnInit(): void {
    const url = this.router.url;
    if (url.includes('signIn')) {
      this.confirmSignIn(url);
    }

    const date = { date: new Date() };
    this.http
      .get('https://geoip.int.intencje.pl')
      .pipe(
        catchError(() => of(date)),
        map((res) => {
          this.geoIP = Object.assign(res, date);
        }),
        //takeUntil(this.unsubscribe),
      )
      .subscribe();
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  get form() {
    return this.loginRegisterForm.controls;
  }

  /**
   * Uruchamia loader informujący użytkownika o toczącym się procesie logowania
   */
  async showLoggingLoader(): Promise<void> {
    // this.logging = await this.loadingController.create({
    //   message: 'Logowanie...',
    // });
    // await this.logging.present();
  }

  /**
   * Uruchamia się po zakończeniu animacji wizualizującej wysyłkę mejla z linkiem aktywującym konto
   */
  animationComplete(): void {
    this.showMessage = true;
    this.ref.tick();
  }

  /**
   * Przekazuje wprowadzony w formularzu adres email do Firebase, który wysyła link aktywujący konto
   */
  loginRegister(): void {
    this.submitted = true;
    const email = this.form.email.value;
    const actionCodeSettings = {
      url: `${environment.url}/login`,
      handleCodeInApp: true,
    };

    if (this.loginRegisterForm.valid) {
      this.loading = true;

      if (isPlatformBrowser(this.platformId))
        window.localStorage.setItem('returnURL', this.route.snapshot.queryParams['returnUrl'] || '/');
      this.afAuth
        .sendSignInLinkToEmail(email, actionCodeSettings)
        .then(() => {
          if (isPlatformBrowser(this.platformId)) window.localStorage.setItem('emailForSignIn', email);
          this.email = email;
          this.emailSent = true;
          this.loading = false;
        })
        .catch((error) => {
          let message: string;
          switch (error.code) {
            case 'auth/invalid-email':
              message = 'Wprowadź poprawny adres email';
              break;
            case 'auth/network-request-failed':
              message = 'Sprawdź połączenie z Internetem';
              break;
            case 'auth/user-disabled':
              message = 'Twoje konto zostało zablokowane';
              break;
            default:
              message = 'Wystąpił błąd. Spróbuj ponownie za chwilę';
              break;
          }
          this.tools.presentToast({ message: message });
          this.loading = false;
        });
    }
  }

  /**
   * Wywoływane w ngOnInit jeśli URL zawiera 'signIn' - obsługujemy użytkownika, który kliknął w link
   * wygenerowany w loginRegister(). Jeśli użytkownik loguje się raz pierwszy ląduje na stronie /szczesc-boze
   * gdzie prosimy go o uzupełnienie danych. Jeśli ma już konto logujemy go.
   */
  async confirmSignIn(url: string): Promise<void> {
    this.showLoggingLoader();
    try {
      if (this.afAuth.isSignInWithEmailLink(url)) {
        if (isPlatformBrowser(this.platformId)) this.email = window.localStorage.getItem('emailForSignIn');
        // Jeśli użytkownik kliknął w link z mejla na maszynie, na której nie używał apki prosimy o ponowne podanie mejla.
        if (!this.email) {
          this.email = window.prompt('Wpisz adres email, którym chcesz się logować');
        }
        const result = await this.afAuth.signInWithEmailLink(this.email, url);
        // Nowy użytkownik
        if (result.additionalUserInfo.isNewUser) {
          this.auth.updateUserData(result.user, this.geoIP);
          this.router.navigate(['/aktywacja']);
        } else {
          // Obecny użytkownik
          if (isPlatformBrowser(this.platformId)) this.router.navigate([window.localStorage.getItem('returnURL')]);
          this.auth.updateUserGeoIP(result.user, this.geoIP);
        }
        if (isPlatformBrowser(this.platformId))
          window.localStorage.removeItem('returnURL'), window.localStorage.removeItem('emailForSignIn');
      }
    } catch (err) {
      let message: string;
      switch (err.code) {
        case 'auth/network-request-failed':
          message = 'Sprawdź połączenie z Internetem';
          break;
        case 'auth/user-disabled':
          message = 'Twoje konto zostało zablokowane';
          break;
        default:
          message = 'Wystąpił błąd. Spróbuj ponownie za chwilę';
          break;
      }
      this.tools.presentToast({ message: message });
    }
    //this.logging.dismiss();
  }

  ngOnDestroy(): void {
    //this.unsubscribe.next();
  }
}
