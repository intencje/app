import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsPage } from './settings.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage
  },
  {
    path: 'powiadomienia-email',
    loadChildren: () => import('./email-notifications/settings-email-notifications.module').then( m => m.SettingsEmailNotificationsPageModule),
    data: {
      title: 'Ustawienia / Powiadomienia email',
      description: ' '
    }
  },
  {
    path: 'powiadomienia-push',
    loadChildren: () => import('./push-notifications/settings-push-notifications.module').then( m => m.SettingsPushNotificationsPageModule),
    data: {
      title: 'Ustawienia / Powiadomienia push',
      description: ' '
    }
  },
  {
    path: 'przypomnienia',
    loadChildren: () => import('./reminders/settings-reminders.module').then( m => m.SettingsRemindersPageModule),
    data: {
      title: 'Ustawienia / Przypomnienia',
      description: ' '
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPageRoutingModule {}
