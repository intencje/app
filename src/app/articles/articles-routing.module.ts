import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesPage } from './articles.page';

const routes: Routes = [
  {
    path: '',
    component: ArticlesPage
  },
  {
    path: 'dodaj',
    loadChildren: () => import('./create/article-create.module').then( m => m.ArticleCreatePageModule),
    data: {
      title: 'Artykuły / Dodaj',
      description: ' ',
      //roles: [Role.Administrator, Role.Moderator]
    },
    //canActivate: [AuthService]
  },
  {
    path: 'edytuj',
    loadChildren: () => import('./edit/articles-edit.module').then( m => m.ArticlesEditPageModule),
    data: {
      title: 'Artykuły / Edytuj',
      description: ' ',
      //roles: [Role.Administrator, Role.Author]
    },
    //canActivate: [AuthService]
  },
  {
    path: ':article_slug',
    loadChildren: () => import('./details/article-details.module').then( m => m.ArticleDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesPageRoutingModule {}
