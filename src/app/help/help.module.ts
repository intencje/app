import { NgModule } from '@angular/core';
import { HelpPageRoutingModule } from './help-routing.module';
import { HelpPage } from './help.page';
import { ComponentsModule } from '../_components/components.module';

@NgModule({
  imports: [
    HelpPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HelpPage]
})
export class HelpPageModule {}
