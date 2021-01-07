import { NgModule } from '@angular/core';
import { ActivatePageRoutingModule } from './activate-routing.module';
import { ActivatePage } from './activate.page';
import { ComponentsModule } from '../_components/components.module';

@NgModule({
  imports: [ActivatePageRoutingModule, ComponentsModule],
  declarations: [ActivatePage],
})
export class ActivatePageModule {}
