import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prayer-edit-details',
  templateUrl: './prayer-edit-details.page.html',
  styleUrls: ['./prayer-edit-details.page.scss'],
})
export class PrayerEditDetailsPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,

  ) { }

  ngOnInit() {
  }

}
