import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpCreatePage } from './help-create.page';

const routes: Routes = [
  {
    path: '',
    component: HelpCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpCreatePageRoutingModule {}
