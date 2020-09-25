import { NgModule } from '@angular/core';
import { BlogDetailsPageRoutingModule } from './blog-details-routing.module';
import { BlogDetailsPage } from './blog-details.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    BlogDetailsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BlogDetailsPage]
})
export class BlogDetailsPageModule {}
