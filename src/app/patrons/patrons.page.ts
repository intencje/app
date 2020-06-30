import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../_services/seo/seo.service';

@Component({
  selector: 'app-patrons',
  templateUrl: './patrons.page.html',
  styleUrls: ['./patrons.page.scss'],
})
export class PatronsPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,
    private readonly seoService: SeoService,
  ) { }

  ngOnInit() {
  }

}
