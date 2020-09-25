import { NgModule } from '@angular/core';
import { SettingsPageRoutingModule } from './settings-routing.module';
import { SettingsPage } from './settings.page';
import { ComponentsModule } from '../_components/components.module';

@NgModule({
  imports: [
    SettingsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}
