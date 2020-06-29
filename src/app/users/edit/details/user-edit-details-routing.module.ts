import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserEditDetailsPage } from './user-edit-details.page';

const routes: Routes = [
  {
    path: '',
    component: UserEditDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserEditDetailsPageRoutingModule {}
