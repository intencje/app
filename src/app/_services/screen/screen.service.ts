import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ScreenService {
  public isMobile: boolean;
  public isBrowser = isPlatformBrowser(this.platformId);

  constructor(
    public viewportRuler: ViewportRuler,
    breakpointObserver: BreakpointObserver,
    @Inject(PLATFORM_ID) private platformId: Record<string, unknown>,
  ) {
    breakpointObserver
      .observe([
        Breakpoints.Handset,
        //Breakpoints.Tablet,
        // Breakpoints.Web,
        Breakpoints.HandsetPortrait,
        Breakpoints.TabletPortrait,
        // Breakpoints.WebPortrait,
        Breakpoints.HandsetLandscape,
        //Breakpoints.TabletLandscape,
        // Breakpoints.WebLandscape,
      ])
      .subscribe((result) => {
        result.matches ? (this.isMobile = true) : (this.isMobile = false);
        this.isMobile = breakpointObserver.isMatched('(max-width: 768px)');
      });
    // TODO clean up!
    // { width, height }
    // console.log(this.viewportRuler.getViewportSize().height);

    // { bottom, height, left, right, top, width }
    // console.log(this.viewportRuler.getViewportRect());

    // { top, left }
    // console.log(this.viewportRuler.getViewportScrollPosition());

    // native resize event object
    //this.viewportRuler.change().subscribe((resizeEvent) => console.log(resizeEvent));
  }

  /**
   * Zwraca wysokość areny, na której możemy pracować na danym ekranie.
   */
  arenaHeight(): number {
    const viewportHeight = this.viewportRuler.getViewportSize().height;
    let arenaHeight: number;
    // Wartości 112 i 128 to sumy wysokości headera i footera definiowane dla desktop / mobile w CSS Material Design
    this.isMobile ? (arenaHeight = viewportHeight - 112) : (arenaHeight = viewportHeight);
    return arenaHeight;
  }
}
