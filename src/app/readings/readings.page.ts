import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../_services/seo/seo.service';

@Component({
  selector: 'app-readings',
  templateUrl: './readings.page.html',
  styleUrls: ['./readings.page.scss'],
})
export class ReadingsPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,
    private readonly seoService: SeoService
  ) { }

  ngOnInit() {
  }

}
