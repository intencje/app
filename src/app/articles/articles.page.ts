import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../_services/seo/seo.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {
  items = [];
  constructor(
    public readonly route: ActivatedRoute,
    private readonly seoService: SeoService,

  ) {

    for (let i = 1; i < 300; i++) {
      this.items.push({name: "Item " + i});
    }
   }

  ngOnInit() {

  }

}
