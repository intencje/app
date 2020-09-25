import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-edit-details',
  templateUrl: './article-edit-details.page.html',
  styleUrls: ['./article-edit-details.page.scss'],
})
export class ArticleEditDetailsPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
