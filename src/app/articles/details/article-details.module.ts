import { NgModule } from '@angular/core';
import { ArticleDetailsPageRoutingModule } from './article-details-routing.module';
import { ArticleDetailsPage } from './article-details.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    ArticleDetailsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ArticleDetailsPage]
})
export class ArticleDetailsPageModule {}
