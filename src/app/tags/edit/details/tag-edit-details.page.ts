import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tag-edit-details',
  templateUrl: './tag-edit-details.page.html',
  styleUrls: ['./tag-edit-details.page.scss'],
})
export class TagEditDetailsPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
