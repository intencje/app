import { NgModule } from '@angular/core';
import { PrayerCreatePageRoutingModule } from './prayer-create-routing.module';
import { PrayerCreatePage } from './prayer-create.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    PrayerCreatePageRoutingModule,
    ComponentsModule
  ],
  declarations: [PrayerCreatePage]
})
export class PrayerCreatePageModule {}
