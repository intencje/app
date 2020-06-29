import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrayersNovenaPage } from './prayers-novena.page';

const routes: Routes = [
  {
    path: '',
    component: PrayersNovenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrayersNovenaPageRoutingModule {}
