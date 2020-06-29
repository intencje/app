import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from 'src/app/_services/seo/seo.service';

@Component({
  selector: 'app-prayers-basic',
  templateUrl: './prayers-basic.page.html',
  styleUrls: ['./prayers-basic.page.scss'],
})
export class PrayersBasicPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,
    private readonly seoService: SeoService,
  ) { }

  ngOnInit() {
  }

}
