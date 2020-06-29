import { NgModule } from '@angular/core';
import { TagsEditPageRoutingModule } from './tags-edit-routing.module';
import { TagsEditPage } from './tags-edit.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    TagsEditPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TagsEditPage]
})
export class TagsEditPageModule {}
