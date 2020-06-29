import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings-push-notifications',
  templateUrl: './settings-push-notifications.page.html',
  styleUrls: ['./settings-push-notifications.page.scss'],
})
export class SettingsPushNotificationsPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
