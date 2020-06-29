import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrayersBasicPage } from './prayers-basic.page';

const routes: Routes = [
  {
    path: '',
    component: PrayersBasicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrayersBasicPageRoutingModule {}
