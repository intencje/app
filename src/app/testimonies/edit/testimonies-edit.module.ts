import { NgModule } from '@angular/core';
import { TestimoniesEditPageRoutingModule } from './testimonies-edit-routing.module';
import { TestimoniesEditPage } from './testimonies-edit.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    TestimoniesEditPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TestimoniesEditPage]
})
export class TestimoniesEditPageModule {}
