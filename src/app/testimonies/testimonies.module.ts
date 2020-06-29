import { NgModule } from '@angular/core';
import { TestimoniesPageRoutingModule } from './testimonies-routing.module';
import { TestimoniesPage } from './testimonies.page';
import { ComponentsModule } from '../_components/components.module';

@NgModule({
  imports: [
    TestimoniesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TestimoniesPage]
})
export class TestimoniesPageModule {}
