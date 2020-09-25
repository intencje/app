import { NgModule } from '@angular/core';
import { RadioRoutingModule } from './radio-routing.module';
import { RadioPage } from './radio.page';
import { ComponentsModule } from '../_components/components.module';

@NgModule({
  imports: [RadioRoutingModule, ComponentsModule],
  declarations: [RadioPage],
})
export class RadioPageModule {}
