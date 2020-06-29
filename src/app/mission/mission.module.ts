import { NgModule } from '@angular/core';
import { MissionPageRoutingModule } from './mission-routing.module';
import { MissionPage } from './mission.page';
import { ComponentsModule } from '../_components/components.module';

@NgModule({
  imports: [
    MissionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MissionPage]
})
export class MissionPageModule {}
