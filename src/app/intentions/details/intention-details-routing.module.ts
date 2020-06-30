import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntentionDetailsPage } from './intention-details.page';

const routes: Routes = [
  {
    path: '',
    component: IntentionDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntentionDetailsPageRoutingModule {}
