import { NgModule } from '@angular/core';
import { ParishCreatePageRoutingModule } from './parish-create-routing.module';
import { ParishCreatePage } from './parish-create.page';
import { ComponentsModule } from './../../_components/components.module';

@NgModule({
  imports: [
    ParishCreatePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ParishCreatePage]
})
export class ParishCreatePageModule {}
