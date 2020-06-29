import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appShowPatronProfile]'
})
export class ShowPatronProfileDirective {

  @Input()
  appShowPatronProfile;

  constructor() { }

}
