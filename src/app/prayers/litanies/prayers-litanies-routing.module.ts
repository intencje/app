import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrayersLitaniesPage } from './prayers-litanies.page';

const routes: Routes = [
  {
    path: '',
    component: PrayersLitaniesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrayersLitaniesPageRoutingModule {}
