import { NgModule } from '@angular/core';
import { TosPageRoutingModule } from './tos-routing.module';
import { TosPage } from './tos.page';
import { ComponentsModule } from '../_components/components.module';

@NgModule({
  imports: [
    TosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TosPage]
})
export class TosPageModule {}
