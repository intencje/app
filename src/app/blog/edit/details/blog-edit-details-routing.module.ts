import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogEditDetailsPage } from './blog-edit-details.page';

const routes: Routes = [
  {
    path: '',
    component: BlogEditDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogEditDetailsPageRoutingModule {}
