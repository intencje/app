import { NgModule } from '@angular/core';
import { PatronEditDetailsPageRoutingModule } from './patron-edit-details-routing.module';
import { PatronEditDetailsPage } from './patron-edit-details.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    PatronEditDetailsPageRoutingModule
  ],
  declarations: [PatronEditDetailsPage]
})
export class PatronEditDetailsPageModule {}
