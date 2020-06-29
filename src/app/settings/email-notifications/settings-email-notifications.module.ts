import { NgModule } from '@angular/core';
import { SettingsEmailNotificationsPageRoutingModule } from './settings-email-notifications-routing.module';
import { SettingsEmailNotificationsPage } from './settings-email-notifications.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    SettingsEmailNotificationsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SettingsEmailNotificationsPage]
})
export class SettingsEmailNotificationsPageModule {}
