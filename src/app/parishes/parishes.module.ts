import { NgModule } from '@angular/core';
import { ParishesPageRoutingModule } from './parishes-routing.module';
import { ParishesPage } from './parishes.page';
import { ComponentsModule } from './../_components/components.module';

@NgModule({
  imports: [
    ParishesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ParishesPage]
})
export class ParishesPageModule {}
