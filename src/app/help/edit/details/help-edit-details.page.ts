import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-help-edit-details',
  templateUrl: './help-edit-details.page.html',
  styleUrls: ['./help-edit-details.page.scss'],
})
export class HelpEditDetailsPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
