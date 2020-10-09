import { NgModule } from '@angular/core';
import { HelpPageRoutingModule } from './help-routing.module';
import { HelpPage } from './help.page';
import { ComponentsModule } from '../_components/components.module';
import { DirectivesModule } from '../_directives/directives.module';
import 'hammerjs';
import { HammerModule } from '@angular/platform-browser';

@NgModule({
  imports: [HelpPageRoutingModule, ComponentsModule, HammerModule, DirectivesModule],
  declarations: [HelpPage],
})
export class HelpPageModule {}
