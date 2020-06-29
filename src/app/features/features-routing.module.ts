import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeaturesPage } from './features.page';

const routes: Routes = [
  {
    path: '',
    component: FeaturesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesPageRoutingModule {}
