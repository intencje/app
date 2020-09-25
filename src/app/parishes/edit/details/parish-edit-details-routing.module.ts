import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParishEditDetailsPage } from './parish-edit-details.page';

const routes: Routes = [
  {
    path: '',
    component: ParishEditDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParishEditDetailsPageRoutingModule {}
