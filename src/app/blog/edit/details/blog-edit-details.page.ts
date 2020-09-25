import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-edit-details',
  templateUrl: './blog-edit-details.page.html',
  styleUrls: ['./blog-edit-details.page.scss'],
})
export class BlogEditDetailsPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
