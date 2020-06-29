import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tags-edit',
  templateUrl: './tags-edit.page.html',
  styleUrls: ['./tags-edit.page.scss'],
})
export class TagsEditPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
