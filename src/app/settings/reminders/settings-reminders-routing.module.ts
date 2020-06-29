import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsRemindersPage } from './settings-reminders.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsRemindersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRemindersPageRoutingModule {}
