import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../_services/seo/seo.service';

@Component({
  selector: 'app-parishes',
  templateUrl: './parishes.page.html',
  styleUrls: ['./parishes.page.scss'],
})
export class ParishesPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,
    private readonly seoService: SeoService,
  ) { }

  ngOnInit() {
  }

}
