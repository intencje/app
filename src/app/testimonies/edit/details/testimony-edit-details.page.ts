import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testimony-edit-details',
  templateUrl: './testimony-edit-details.page.html',
  styleUrls: ['./testimony-edit-details.page.scss'],
})
export class TestimonyEditDetailsPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
