import { NgModule } from '@angular/core';
import { SettingsPushNotificationsPageRoutingModule } from './settings-push-notifications-routing.module';
import { SettingsPushNotificationsPage } from './settings-push-notifications.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    SettingsPushNotificationsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SettingsPushNotificationsPage]
})
export class SettingsPushNotificationsPageModule {}
