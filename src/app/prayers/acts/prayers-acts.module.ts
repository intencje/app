import { NgModule } from '@angular/core';
import { PrayersActsPageRoutingModule } from './prayers-acts-routing.module';
import { PrayersActsPage } from './prayers-acts.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    PrayersActsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PrayersActsPage]
})
export class PrayersActsPageModule {}
