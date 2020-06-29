import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prayers-edit',
  templateUrl: './prayers-edit.page.html',
  styleUrls: ['./prayers-edit.page.scss'],
})
export class PrayersEditPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,

  ) { }

  ngOnInit() {
  }

}
