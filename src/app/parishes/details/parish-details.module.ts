import { NgModule } from '@angular/core';
import { ParishDetailsPageRoutingModule } from './parish-details-routing.module';
import { ParishDetailsPage } from './parish-details.page';
import { ComponentsModule } from './../../_components/components.module';

@NgModule({
  imports: [
    ParishDetailsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ParishDetailsPage]
})
export class ParishDetailsPageModule {}
