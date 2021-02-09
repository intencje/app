import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrayerDetailsPage } from './prayer-details.page';

const routes: Routes = [
  {
    path: '',
    component: PrayerDetailsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrayerDetailsPageRoutingModule {}
