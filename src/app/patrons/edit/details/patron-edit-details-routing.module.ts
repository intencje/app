import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatronEditDetailsPage } from './patron-edit-details.page';

const routes: Routes = [
  {
    path: '',
    component: PatronEditDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatronEditDetailsPageRoutingModule {}
