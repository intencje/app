import { NgModule } from '@angular/core';
import { ContactPageRoutingModule } from './contact-routing.module';
import { ContactPage } from './contact.page';
import { ComponentsModule } from '../_components/components.module';

@NgModule({
  imports: [
    ContactPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ContactPage]
})
export class ContactPageModule {}
