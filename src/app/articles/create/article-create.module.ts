import { NgModule } from '@angular/core';
import { CreatePageRoutingModule } from './article-create-routing.module';
import { ArticleCreatePage } from './article-create.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    CreatePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ArticleCreatePage]
})
export class ArticleCreatePageModule {}
