import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogDetailsPage } from './blog-details.page';

const routes: Routes = [
  {
    path: '',
    component: BlogDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogDetailsPageRoutingModule {}
