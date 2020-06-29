import { NgModule } from '@angular/core';
import { ParishEditDetailsPageRoutingModule } from './parish-edit-details-routing.module';
import { ParishEditDetailsPage } from './parish-edit-details.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    ParishEditDetailsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ParishEditDetailsPage]
})
export class ParishEditDetailsPageModule {}
