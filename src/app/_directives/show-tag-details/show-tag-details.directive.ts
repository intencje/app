import { HostListener, Directive, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appShowTagDetails]'
})
export class ShowTagDetailsDirective {

  @Input()
  appShowTagDetails;

  constructor(
    private router: Router
  ) { }

  @HostListener('click') onClick() {
    this.router.navigate(['/tagi', this.appShowTagDetails.slug]);
  }
}
