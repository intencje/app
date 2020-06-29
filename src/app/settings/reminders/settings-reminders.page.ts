import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings-reminders',
  templateUrl: './settings-reminders.page.html',
  styleUrls: ['./settings-reminders.page.scss'],
})
export class SettingsRemindersPage implements OnInit {

  constructor(
    public readonly route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
