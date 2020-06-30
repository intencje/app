import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from 'src/app/_services/seo/seo.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.page.html',
  styleUrls: ['./blog-details.page.scss'],
})
export class BlogDetailsPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,
    private readonly seoService: SeoService,

  ) { }

  ngOnInit() {
  }

}
