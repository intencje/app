import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prayer-create',
  templateUrl: './prayer-create.page.html',
  styleUrls: ['./prayer-create.page.scss'],
})
export class PrayerCreatePage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
