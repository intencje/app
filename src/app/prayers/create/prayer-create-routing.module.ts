import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrayerCreatePage } from './prayer-create.page';

const routes: Routes = [
  {
    path: '',
    component: PrayerCreatePage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrayerCreatePageRoutingModule {}
