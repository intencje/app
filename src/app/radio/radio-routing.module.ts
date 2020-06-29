import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadioPage } from './radio.page';

const routes: Routes = [
  {
    path: '',
    component: RadioPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadioRoutingModule {}
