import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patrons-edit',
  templateUrl: './patrons-edit.page.html',
  styleUrls: ['./patrons-edit.page.scss'],
})
export class PatronsEditPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
