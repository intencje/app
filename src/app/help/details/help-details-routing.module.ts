import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpDetailsPage } from './help-details.page';

const routes: Routes = [
  {
    path: '',
    component: HelpDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpDetailsPageRoutingModule {}
