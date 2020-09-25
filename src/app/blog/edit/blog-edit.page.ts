import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.page.html',
  styleUrls: ['./blog-edit.page.scss'],
})
export class BlogEditPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
