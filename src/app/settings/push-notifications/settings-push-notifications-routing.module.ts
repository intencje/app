import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPushNotificationsPage } from './settings-push-notifications.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPushNotificationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPushNotificationsPageRoutingModule {}
