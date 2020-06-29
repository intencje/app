import { NgModule } from '@angular/core';
import { PatronsPageRoutingModule } from './patrons-routing.module';
import { PatronsPage } from './patrons.page';
import { ComponentsModule } from '../_components/components.module';

@NgModule({
  imports: [
    PatronsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PatronsPage]
})
export class PatronsPageModule {}
