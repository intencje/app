import { NgModule } from '@angular/core';
import { TagCreatePageRoutingModule } from './tag-create-routing.module';
import { TagCreatePage } from './tag-create.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    TagCreatePageRoutingModule,
    ComponentsModule
  ],
  declarations: [TagCreatePage]
})
export class TagCreatePageModule {}
