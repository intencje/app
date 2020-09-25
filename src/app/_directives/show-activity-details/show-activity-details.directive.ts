import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appShowActivityDetails]'
})
export class ShowActivityDetailsDirective {

  @Input()
  appShowActivityDetails;

  constructor() { }

}
