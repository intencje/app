import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestimonyDetailsPage } from './testimony-details.page';

const routes: Routes = [
  {
    path: '',
    component: TestimonyDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestimonyDetailsPageRoutingModule {}
