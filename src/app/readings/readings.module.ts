import { NgModule } from '@angular/core';
import { ReadingsPageRoutingModule } from './readings-routing.module';
import { ReadingsPage } from './readings.page';
import { ComponentsModule } from '../_components/components.module';

@NgModule({
  imports: [
    ReadingsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ReadingsPage]
})
export class ReadingsPageModule {}
