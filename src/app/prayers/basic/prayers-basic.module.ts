import { NgModule } from '@angular/core';
import { PrayersBasicPageRoutingModule } from './prayers-basic-routing.module';
import { PrayersBasicPage } from './prayers-basic.page';
import { ComponentsModule } from './../../_components/components.module';

@NgModule({
  imports: [
    PrayersBasicPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PrayersBasicPage]
})
export class PrayersBasicPageModule {}
