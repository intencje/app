import { NgModule } from '@angular/core';
import { MessagesPageRoutingModule } from './messages-routing.module';
import { MessagesPage } from './messages.page';
import { ComponentsModule } from '../_components/components.module';

@NgModule({
  imports: [
    MessagesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MessagesPage]
})
export class MessagesPageModule {}
