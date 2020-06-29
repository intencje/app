import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlessednessOfGodPage } from './blessedness-of-god.page';

const routes: Routes = [
  {
    path: '',
    component: BlessednessOfGodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlessednessOfGodPageRoutingModule {}
