import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleEditDetailsPage } from './article-edit-details.page';

const routes: Routes = [
  {
    path: '',
    component: ArticleEditDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleEditDetailsPageRoutingModule {}
