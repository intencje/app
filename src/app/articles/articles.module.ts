import { NgModule } from '@angular/core';
import { ArticlesPageRoutingModule } from './articles-routing.module';
import { ArticlesPage } from './articles.page';
import { ComponentsModule } from '../_components/components.module';

@NgModule({
  imports: [ArticlesPageRoutingModule, ComponentsModule],
  declarations: [ArticlesPage],
})
export class ArticlesPageModule {}
