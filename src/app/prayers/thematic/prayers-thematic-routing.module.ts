import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrayersThematicPage } from './prayers-thematic.page';

const routes: Routes = [
  {
    path: '',
    component: PrayersThematicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrayersThematicPageRoutingModule {}
