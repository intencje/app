import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadingsPage } from './readings.page';

const routes: Routes = [
  {
    path: '',
    component: ReadingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadingsPageRoutingModule {}
