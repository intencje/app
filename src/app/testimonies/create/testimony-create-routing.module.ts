import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestimonyCreatePage } from './testimony-create.page';

const routes: Routes = [
  {
    path: '',
    component: TestimonyCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestimonyCreatePageRoutingModule {}
