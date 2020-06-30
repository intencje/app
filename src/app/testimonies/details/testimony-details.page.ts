import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from 'src/app/_services/seo/seo.service';

@Component({
  selector: 'app-testimony-details',
  templateUrl: './testimony-details.page.html',
  styleUrls: ['./testimony-details.page.scss'],
})
export class TestimonyDetailsPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,
    private readonly seoService: SeoService,

  ) { }

  ngOnInit() {
  }

}
