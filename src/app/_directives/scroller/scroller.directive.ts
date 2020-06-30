import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

// https://www.joshmorony.com/creating-a-custom-scroll-vanish-directive-with-ionic-web-components/
@Directive({
  selector: '[appScroller]'
})
export class ScrollerDirective implements OnInit {
  @Input('appScroller') scrollArea;

  private hidden = false;
  private triggerDistance  = 20;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.initStyles();

    this.scrollArea.ionScroll.subscribe(scrollEvent => {
      const delta = scrollEvent.detail.deltaY;

      if (scrollEvent.detail.currentY === 0 && this.hidden) {
        this.show();
      } else if (!this.hidden && delta > this.triggerDistance) {
        this.hide();
      } else if (this.hidden && delta < -this.triggerDistance) {
        this.show();
      }
    });
  }

  initStyles() {
    // this.domCtrl.write(() => {
    //   this.renderer.setStyle(this.element.nativeElement, 'transition', '0.2s linear');
    //   this.renderer.setStyle(this.element.nativeElement, 'height', 'auto');
    // });
  }

  hide() {
    // this.domCtrl.write(() => {
    //   this.renderer.setStyle(this.element.nativeElement, 'min-height', '0px');
    //   this.renderer.setStyle(this.element.nativeElement, 'height', '0px');
    //   this.renderer.setStyle(this.element.nativeElement, 'opacity', '0');
    //   this.renderer.setStyle(this.element.nativeElement, 'padding', '0');
    // });

    this.hidden = true;
  }

  show() {
    // this.domCtrl.write(() => {
      // this.renderer.setStyle(this.element.nativeElement, 'height', 'auto');
      // this.renderer.removeStyle(this.element.nativeElement, 'opacity');
      // this.renderer.removeStyle(this.element.nativeElement, 'min-height');
      // this.renderer.removeStyle(this.element.nativeElement, 'padding');


    // });

    // this.hidden = false;
  }
}
