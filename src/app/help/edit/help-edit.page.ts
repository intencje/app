import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-help-edit',
  templateUrl: './help-edit.page.html',
  styleUrls: ['./help-edit.page.scss'],
})
export class HelpEditPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
