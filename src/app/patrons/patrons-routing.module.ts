import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatronsPage } from './patrons.page';

const routes: Routes = [
  {
    path: '',
    component: PatronsPage,
  },
  {
    path: 'dodaj',
    loadChildren: () => import('./create/patron-create.module').then((m) => m.PatronCreatePageModule),
    data: {
      title: 'Patroni / Dodaj',
      description: ' ',
      //roles: [Role.Administrator]
    },
    //canActivate: [AuthService]
  },
  {
    path: 'edytuj',
    loadChildren: () => import('./edit/patrons-edit.module').then((m) => m.PatronsEditPageModule),
    data: {
      title: 'Patroni / Edytuj',
      description: ' ',
      //roles: [Role.Administrator]
    },
    //canActivate: [AuthService]
  },
  {
    path: ':patron_slug',
    loadChildren: () => import('./details/patron-details.module').then((m) => m.PatronDetailsPageModule),
    data: {
      title: 'Ładowanie...',
      description: ' ',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatronsPageRoutingModule {}
