import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrayerEditDetailsPage } from './prayer-edit-details.page';

const routes: Routes = [
  {
    path: '',
    component: PrayerEditDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrayerEditDetailsPageRoutingModule {}
