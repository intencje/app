import { NgModule } from '@angular/core';
import { NotificationsPageRoutingModule } from './notifications-routing.module';
import { NotificationsPage } from './notifications.page';
import { ComponentsModule } from '../_components/components.module';

@NgModule({
  imports: [NotificationsPageRoutingModule, ComponentsModule],
  declarations: [NotificationsPage],
})
export class NotificationsPageModule {}
