import { NgModule } from '@angular/core';
import { PrayersNovenaPageRoutingModule } from './prayers-novena-routing.module';
import { PrayersNovenaPage } from './prayers-novena.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    PrayersNovenaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PrayersNovenaPage]
})
export class PrayersNovenaPageModule {}
