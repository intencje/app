import { NgModule } from '@angular/core';
import { TagEditDetailsPageRoutingModule } from './tag-edit-details-routing.module';
import { TagEditDetailsPage } from './tag-edit-details.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    TagEditDetailsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TagEditDetailsPage]
})
export class TagEditDetailsPageModule {}
