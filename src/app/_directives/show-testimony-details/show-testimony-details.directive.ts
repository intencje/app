import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appShowTestimonyDetails]'
})
export class ShowTestimonyDetailsDirective {

  @Input()
  appShowTestimonyDetails;

  constructor() { }

}
