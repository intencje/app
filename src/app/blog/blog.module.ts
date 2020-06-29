import { NgModule } from '@angular/core';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogPage } from './blog.page';
import { ComponentsModule } from '../_components/components.module';

@NgModule({
  imports: [
    BlogRoutingModule,
    ComponentsModule
  ],
  declarations: [BlogPage]
})
export class BlogPageModule {}
