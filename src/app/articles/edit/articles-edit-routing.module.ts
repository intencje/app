import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesEditPage } from './articles-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ArticlesEditPage
  },
  {
    path: ':article_slug',
    loadChildren: () => import('./details/article-edit-details.module').then( m => m.ArticleEditDetailsPageModule),
    data: {
      title: 'Artykuł / Edytuj',
      description: ' ',
      //roles: [Role.Administrator]
    },
    //canActivate: [AuthService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesEditPageRoutingModule {}
