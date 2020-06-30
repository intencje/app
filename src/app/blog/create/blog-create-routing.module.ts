import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogCreatePage } from './blog-create.page';

const routes: Routes = [
  {
    path: '',
    component: BlogCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogCreatePageRoutingModule {}
