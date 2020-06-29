import { NgModule } from '@angular/core';
import { BlogEditPageRoutingModule } from './blog-edit-routing.module';
import { BlogEditPage } from './blog-edit.page';
import { ComponentsModule } from './../../_components/components.module';

@NgModule({
  imports: [
    BlogEditPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BlogEditPage]
})
export class BlogEditPageModule {}
