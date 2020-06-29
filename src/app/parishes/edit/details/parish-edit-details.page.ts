import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parish-edit-details',
  templateUrl: './parish-edit-details.page.html',
  styleUrls: ['./parish-edit-details.page.scss'],
})
export class ParishEditDetailsPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
