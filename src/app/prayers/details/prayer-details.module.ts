import { NgModule } from '@angular/core';
import { PrayerDetailsPageRoutingModule } from './prayer-details-routing.module';
import { PrayerDetailsPage } from './prayer-details.page';
import { ComponentsModule } from './../../_components/components.module';

@NgModule({
  imports: [
    PrayerDetailsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PrayerDetailsPage]
})
export class PrayerDetailsPageModule {}
