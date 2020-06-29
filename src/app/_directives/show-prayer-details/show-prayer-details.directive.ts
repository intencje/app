import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appShowPrayerDetails]'
})
export class ShowPrayerDetailsDirective {

  @Input()
  appShowPrayerDetails;

  constructor() { }

}
