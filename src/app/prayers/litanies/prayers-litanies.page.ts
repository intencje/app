import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from 'src/app/_services/seo/seo.service';

@Component({
  selector: 'app-prayers-litanies',
  templateUrl: './prayers-litanies.page.html',
  styleUrls: ['./prayers-litanies.page.scss'],
})
export class PrayersLitaniesPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,
    private readonly seoService: SeoService,
  ) { }

  ngOnInit() {
  }

}
