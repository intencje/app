import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParishDetailsPage } from './parish-details.page';

const routes: Routes = [
  {
    path: '',
    component: ParishDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParishDetailsPageRoutingModule {}
