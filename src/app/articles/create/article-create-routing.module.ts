import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleCreatePage } from './article-create.page';

const routes: Routes = [
  {
    path: '',
    component: ArticleCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePageRoutingModule {}
