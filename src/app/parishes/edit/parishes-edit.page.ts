import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parishes-edit',
  templateUrl: './parishes-edit.page.html',
  styleUrls: ['./parishes-edit.page.scss'],
})
export class ParishesEditPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
