import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seo-stuff',
  templateUrl: './seo-stuff.component.html',
  styleUrls: ['./seo-stuff.component.scss']
})
export class SeoStuffComponent {

  @Input() intention;

  constructor(

  ) {}
}
