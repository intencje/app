import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatronCreatePage } from './patron-create.page';

const routes: Routes = [
  {
    path: '',
    component: PatronCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatronCreatePageRoutingModule {}
