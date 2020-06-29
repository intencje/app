import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.page.html',
  styleUrls: ['./article-create.page.scss'],
})
export class ArticleCreatePage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
