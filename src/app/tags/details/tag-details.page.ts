import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tag-details',
  templateUrl: './tag-details.page.html',
  styleUrls: ['./tag-details.page.scss'],
})
export class TagDetailsPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
