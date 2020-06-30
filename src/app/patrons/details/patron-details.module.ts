import { NgModule } from '@angular/core';
import { PatronDetailsPageRoutingModule } from './patron-details-routing.module';
import { PatronDetailsPage } from './patron-details.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    PatronDetailsPageRoutingModule
  ],
  declarations: [PatronDetailsPage]
})
export class PatronDetailsPageModule {}
