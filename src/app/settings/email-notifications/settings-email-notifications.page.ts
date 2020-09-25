import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings-email-notifications',
  templateUrl: './settings-email-notifications.page.html',
  styleUrls: ['./settings-email-notifications.page.scss'],
})
export class SettingsEmailNotificationsPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
