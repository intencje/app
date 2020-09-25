import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from 'src/app/_services/seo/seo.service';

@Component({
  selector: 'app-parish-details',
  templateUrl: './parish-details.page.html',
  styleUrls: ['./parish-details.page.scss'],
})
export class ParishDetailsPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,
    private readonly seoService: SeoService,
  ) { }

  ngOnInit() {
  }

}
