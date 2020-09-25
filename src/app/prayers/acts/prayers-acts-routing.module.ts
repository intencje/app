import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrayersActsPage } from './prayers-acts.page';

const routes: Routes = [
  {
    path: '',
    component: PrayersActsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrayersActsPageRoutingModule {}
