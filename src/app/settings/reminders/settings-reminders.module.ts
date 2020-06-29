import { NgModule } from '@angular/core';
import { SettingsRemindersPageRoutingModule } from './settings-reminders-routing.module';
import { SettingsRemindersPage } from './settings-reminders.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    SettingsRemindersPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SettingsRemindersPage]
})
export class SettingsRemindersPageModule {}
