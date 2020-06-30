import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appShowArticleDetails]'
})
export class ShowArticleDetailsDirective {

  @Input()
  appShowArticleDetails;

  constructor() { }

}
