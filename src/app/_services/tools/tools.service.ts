import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ToolsService implements OnDestroy {
  private unsubscribe = new Subject();
  constructor(private router: Router, private snackbar: MatSnackBar) {}

  /**
   * Reloads page after removin some elements
   * @param  {string} destination Name of target page
   * @returns void
   */
  reloadAfterAction(destination?: string): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([destination ? destination : '/']);
  }

  /**
   * Display Angular Material snackbar
   * @param  {{message:string;horizontalPosition?:MatSnackBarHorizontalPosition;verticalPosition?:MatSnackBarVerticalPosition;duration?:number;ctaText?:string;}} params
   * @returns Promise
   */
  async presentToast(params: {
    message: string;
    horizontalPosition?: MatSnackBarHorizontalPosition;
    verticalPosition?: MatSnackBarVerticalPosition;
    duration?: number;
    ctaText?: string;
    ctaURL?: string;
  }): Promise<void> {
    const horizontalPosition = params.hasOwnProperty('horizontalPosition') ? params.horizontalPosition : 'right';
    const verticalPosition = params.hasOwnProperty('vertical') ? params.verticalPosition : 'top';
    const duration = params.hasOwnProperty('duration') ? params.duration : 5000;
    const ctaText = params.hasOwnProperty('ctaText') ? params.ctaText : 'OK';

    const snack = this.snackbar.open(params.message, ctaText, {
      verticalPosition: verticalPosition,
      horizontalPosition: horizontalPosition,
      duration: duration,
    });

    if (params.hasOwnProperty('ctaURL')) {
      snack
        .onAction()
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(() => {
          this.router.navigateByUrl(params.ctaURL);
        });
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }
}
