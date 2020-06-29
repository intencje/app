import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TagCreatePage } from './tag-create.page';

const routes: Routes = [
  {
    path: '',
    component: TagCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagCreatePageRoutingModule {}
