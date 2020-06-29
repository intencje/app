import { NgModule } from '@angular/core';
import { BlogEditDetailsPageRoutingModule } from './blog-edit-details-routing.module';
import { BlogEditDetailsPage } from './blog-edit-details.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    BlogEditDetailsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BlogEditDetailsPage]
})
export class BlogEditDetailsPageModule {}
