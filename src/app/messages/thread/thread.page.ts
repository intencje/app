import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.page.html',
  styleUrls: ['./thread.page.scss'],
})
export class ThreadPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
