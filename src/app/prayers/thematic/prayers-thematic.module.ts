import { NgModule } from '@angular/core';
import { PrayersThematicPageRoutingModule } from './prayers-thematic-routing.module';
import { PrayersThematicPage } from './prayers-thematic.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    PrayersThematicPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PrayersThematicPage]
})
export class PrayersThematicPageModule {}
