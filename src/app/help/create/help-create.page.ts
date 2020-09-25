import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-help-create',
  templateUrl: './help-create.page.html',
  styleUrls: ['./help-create.page.scss'],
})
export class HelpCreatePage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
