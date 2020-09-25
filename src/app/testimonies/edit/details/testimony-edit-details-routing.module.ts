import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestimonyEditDetailsPage } from './testimony-edit-details.page';

const routes: Routes = [
  {
    path: '',
    component: TestimonyEditDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestimonyEditDetailsPageRoutingModule {}
