import { NgModule } from '@angular/core';
import { HelpEditDetailsPageRoutingModule } from './help-edit-details-routing.module';
import { HelpEditDetailsPage } from './help-edit-details.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    HelpEditDetailsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HelpEditDetailsPage]
})
export class HelpEditDetailsPageModule {}
