import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ScreenService } from './_services/screen/screen.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AuthService } from './_services/auth/auth.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string;
  public isBrowser = isPlatformBrowser(this.platformId);
  constructor(
    private swUpdate: SwUpdate,
    private snackbar: MatSnackBar,
    public screenService: ScreenService,
    sanitizer: DomSanitizer,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public auth: AuthService,

    @Inject(PLATFORM_ID) private platformId,
  ) {}

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
          window.location.reload();
        });
      });
    }
  }
}
