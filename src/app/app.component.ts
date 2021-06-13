import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ScreenService } from './_services/screen/screen.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AuthService } from './_services/auth/auth.service';
import { isPlatformBrowser } from '@angular/common';
import { SeoService } from './_services/seo/seo.service';
import { Plugins } from '@capacitor/core';
import { ElectronService } from './_services/electron/electron.service';
import { DbService } from './_services/db/db.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CustomValidators } from './_models/custom-validators.model';
import { User } from './_models/firebase.model';
import { ImageService } from './_services/image/image.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loading = false;
  submitted = false;
  confirmed = false;
  title: string;
  public isBrowser = isPlatformBrowser(this.platformId);
  public activateAccountForm: FormGroup;
  constructor(
    private electronService: ElectronService,
    private swUpdate: SwUpdate,
    private snackbar: MatSnackBar,
    public screenService: ScreenService,
    sanitizer: DomSanitizer,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public auth: AuthService,
    private seoService: SeoService,
    private db: DbService,
    public formBuilder: FormBuilder,
    public imageService: ImageService,

    @Inject(PLATFORM_ID) private platformId,
  ) {
    this.seoService.startRouteListener();
    if (electronService.isElectron) {
      console.log(process.env);
      console.log('Run in electron');
      console.log('Electron ipcRenderer', this.electronService.ipcRenderer);
      console.log('NodeJS childProcess', this.electronService.childProcess);
    } else {
      console.log('Run in browser');
    }

    this.activateAccountForm = formBuilder.group({
      signature: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(30),
          CustomValidators.cannotContainSwearwords,
        ],
      ],
      town: ['', [Validators.minLength(1), Validators.maxLength(40), CustomValidators.cannotContainSwearwords]],
      bio: ['', [Validators.maxLength(100), CustomValidators.cannotContainSwearwords]],
      parish: [''],
    });
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.title = this.activatedRoute.firstChild.snapshot.data.title;
      }
    });

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        const snack = this.snackbar.open('Dostępna nowa wersja aplikacji', 'ZOBACZ', {
          verticalPosition: 'top',
        });

        snack.onAction().subscribe(() => {
          //TODO: isPlatformBrowser!
          if (typeof window !== "undefined") {
            window.location.reload();
          }

        });
      });
    }
  }

  get form() {
    return this.activateAccountForm.controls;
  }

  async activateAccount(payload: { signature: string; town?: string; parish?: string; bio?: string }): Promise<any> {
    if (this.activateAccountForm.valid) {
      const user: User = await this.auth.getUser();
      this.loading = true;
      const userUpdateData: User = {
        uid: user.uid,
        email: user.email,
        emailVerified: user.emailVerified,
        accountActivated: true,
        accountActivationDate: new Date(),
        displayName: payload.signature,
        town: payload.town,
        bio: payload.bio,
        avatarURL: this.imageService.downloadUrl,
        parish: payload.parish,
      };

      this.db.update(`users/${user.uid}`, userUpdateData).then(() => {
        this.loading = false;
        this.snackbar.open('Twoje konto jest już aktywne', 'OK', {});
      });
    }
  }
}
