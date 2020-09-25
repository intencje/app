import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntentionCreatePage } from './intention-create.page';

const routes: Routes = [
  {
    path: '',
    component: IntentionCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntentionCreatePageRoutingModule {}
