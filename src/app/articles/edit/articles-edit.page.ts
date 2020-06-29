import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articles-edit',
  templateUrl: './articles-edit.page.html',
  styleUrls: ['./articles-edit.page.scss'],
})
export class ArticlesEditPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
