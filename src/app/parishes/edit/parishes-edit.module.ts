import { NgModule } from '@angular/core';
import { ParishesEditPageRoutingModule } from './parishes-edit-routing.module';
import { ParishesEditPage } from './parishes-edit.page';
import { ComponentsModule } from './../../_components/components.module';

@NgModule({
  imports: [
    ParishesEditPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ParishesEditPage]
})
export class ParishesEditPageModule {}
