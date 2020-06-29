import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleDetailsPage } from './article-details.page';

const routes: Routes = [
  {
    path: '',
    component: ArticleDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleDetailsPageRoutingModule {}
