import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatronDetailsPage } from './patron-details.page';

const routes: Routes = [
  {
    path: '',
    component: PatronDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatronDetailsPageRoutingModule {}
