import { NgModule } from '@angular/core';
import { HelpDetailsPageRoutingModule } from './help-details-routing.module';
import { HelpDetailsPage } from './help-details.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    HelpDetailsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HelpDetailsPage]
})
export class HelpDetailsPageModule {}
