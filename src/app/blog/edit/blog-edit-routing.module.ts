import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogEditPage } from './blog-edit.page';

const routes: Routes = [
  {
    path: '',
    component: BlogEditPage
  },
  {
    path: ':blog_slug',
    loadChildren: () => import('./details/blog-edit-details.module').then( m => m.BlogEditDetailsPageModule),
    data: {
      title: 'Blog / Edytuj',
      description: '',
      //roles: [Role.Administrator]
    },
    //canActivate: [AuthService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogEditPageRoutingModule {}
