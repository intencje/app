import { NgModule } from '@angular/core';
import { PrayerCreatePageRoutingModule } from './prayer-create-routing.module';
import { PrayerCreatePage } from './prayer-create.page';
import { ComponentsModule } from 'src/app/_components/components.module';
import { LottieModule } from 'ngx-lottie';

@NgModule({
  imports: [PrayerCreatePageRoutingModule, ComponentsModule, LottieModule],
  declarations: [PrayerCreatePage],
})
export class PrayerCreatePageModule {}
