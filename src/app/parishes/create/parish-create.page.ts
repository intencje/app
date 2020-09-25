import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parish-create',
  templateUrl: './parish-create.page.html',
  styleUrls: ['./parish-create.page.scss'],
})
export class ParishCreatePage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,

  ) { }

  ngOnInit() {
  }

}
