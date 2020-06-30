import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogPage } from './blog.page';

const routes: Routes = [
  {
    path: '',
    component: BlogPage
  },
  {
    path: 'dodaj',
    loadChildren: () => import('./create/blog-create.module').then( m => m.BlogCreatePageModule),
    data: {
      title: 'Blog / Dodaj',
      description: ' ',
      //roles: [Role.Administrator]
    },
    //canActivate: [AuthService]
  },
  {
    path: 'edytuj',
    loadChildren: () => import('./edit/blog-edit.module').then( m => m.BlogEditPageModule),
    data: {
      title: 'Blog / Edytuj',
      description: ' ',
      //roles: [Role.Administrator]
    },
    //canActivate: [AuthService]
  },
  {
    path: ':blog_slug',
    loadChildren: () => import('./details/blog-details.module').then( m => m.BlogDetailsPageModule),
    data: {
      title: 'Blog / ',
      description: ' ',
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
