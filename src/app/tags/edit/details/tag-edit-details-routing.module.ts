import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TagEditDetailsPage } from './tag-edit-details.page';

const routes: Routes = [
  {
    path: '',
    component: TagEditDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagEditDetailsPageRoutingModule {}
