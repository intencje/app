import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testimonies-edit',
  templateUrl: './testimonies-edit.page.html',
  styleUrls: ['./testimonies-edit.page.scss'],
})
export class TestimoniesEditPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
