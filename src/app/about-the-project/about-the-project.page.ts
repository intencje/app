import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-the-project',
  templateUrl: './about-the-project.page.html',
  styleUrls: ['./about-the-project.page.scss'],
})
export class AboutTheProjectPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
