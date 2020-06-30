import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appShowUserProfile]'
})
export class ShowUserProfileDirective {

  @Input() appShowUserProfile;

  constructor() { }

}
