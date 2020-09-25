import { NgModule } from '@angular/core';
import { BlogCreatePageRoutingModule } from './blog-create-routing.module';
import { BlogCreatePage } from './blog-create.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    BlogCreatePageRoutingModule,
    ComponentsModule
  ],
  declarations: [BlogCreatePage]
})
export class BlogCreatePageModule {}
