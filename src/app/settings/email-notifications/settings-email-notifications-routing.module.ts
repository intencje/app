import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsEmailNotificationsPage } from './settings-email-notifications.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsEmailNotificationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsEmailNotificationsPageRoutingModule {}
