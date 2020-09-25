import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParishesEditPage } from './parishes-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ParishesEditPage
  },
  {
    path: ':parish_slug',
    loadChildren: () => import('./details/parish-edit-details.module').then( m => m.ParishEditDetailsPageModule),
    data: {
      title: 'Parafia / Edytuj',
      description: ' ',
      //roles: [Role.Administrator]
    },
    //canActivate: [AuthService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParishesEditPageRoutingModule {}
