import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tag-create',
  templateUrl: './tag-create.page.html',
  styleUrls: ['./tag-create.page.scss'],
})
export class TagCreatePage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
