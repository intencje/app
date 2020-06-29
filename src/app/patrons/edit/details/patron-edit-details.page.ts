import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from 'src/app/_services/seo/seo.service';

@Component({
  selector: 'app-patron-edit-details',
  templateUrl: './patron-edit-details.page.html',
  styleUrls: ['./patron-edit-details.page.scss'],
})
export class PatronEditDetailsPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
