import { NgModule } from '@angular/core';
import { TagDetailsPageRoutingModule } from './tag-details-routing.module';
import { TagDetailsPage } from './tag-details.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    TagDetailsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TagDetailsPage]
})
export class TagDetailsPageModule {}
