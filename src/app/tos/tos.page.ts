import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../_services/seo/seo.service';

@Component({
  selector: 'app-tos',
  templateUrl: './tos.page.html',
  styleUrls: ['./tos.page.scss'],
})
export class TosPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,
    private readonly seoService: SeoService

  ) { }

  ngOnInit() {
  }

}
