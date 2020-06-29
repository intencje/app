import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParishCreatePage } from './parish-create.page';

const routes: Routes = [
  {
    path: '',
    component: ParishCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParishCreatePageRoutingModule {}
