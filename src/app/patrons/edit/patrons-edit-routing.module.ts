import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatronsEditPage } from './patrons-edit.page';

const routes: Routes = [
  {
    path: '',
    component: PatronsEditPage
  },
  {
    path: ':patron_slug',
    loadChildren: () => import('./details/patron-edit-details.module').then( m => m.PatronEditDetailsPageModule),
    data: {
      title: 'Patron / Edytuj',
      description: 'Patron / Edytuj',
      //roles: [Role.Administrator]
    },
    //canActivate: [AuthService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatronsEditPageRoutingModule {}
