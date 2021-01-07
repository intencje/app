import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../_services/seo/seo.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage {
  empty = false;

  countryFilterTooShort = false;
  constructor(public readonly route: ActivatedRoute, private readonly seoService: SeoService) {}

  gestureTest(e) {
    console.log(e);
  }
}
