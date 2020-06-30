import { NgModule } from '@angular/core';
import { PrayerEditDetailsPageRoutingModule } from './prayer-edit-details-routing.module';
import { PrayerEditDetailsPage } from './prayer-edit-details.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    PrayerEditDetailsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PrayerEditDetailsPage]
})
export class PrayerEditDetailsPageModule {}
