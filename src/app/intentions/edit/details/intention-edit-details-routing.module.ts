import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntentionEditDetailsPage } from './intention-edit-details.page';

const routes: Routes = [
  {
    path: '',
    component: IntentionEditDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntentionEditDetailsPageRoutingModule {}
