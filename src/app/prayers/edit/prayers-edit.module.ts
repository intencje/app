import { NgModule } from '@angular/core';
import { PrayersEditPageRoutingModule } from './prayers-edit-routing.module';
import { PrayersEditPage } from './prayers-edit.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    PrayersEditPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PrayersEditPage]
})
export class PrayersEditPageModule {}
