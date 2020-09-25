import { NgModule } from '@angular/core';
import { ArticleEditDetailsPageRoutingModule } from './article-edit-details-routing.module';
import { ArticleEditDetailsPage } from './article-edit-details.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    ArticleEditDetailsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ArticleEditDetailsPage]
})
export class ArticleEditDetailsPageModule {}
