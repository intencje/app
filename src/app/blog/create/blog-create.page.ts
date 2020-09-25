import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.page.html',
  styleUrls: ['./blog-create.page.scss'],
})
export class BlogCreatePage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
