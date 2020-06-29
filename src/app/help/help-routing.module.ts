import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpPage } from './help.page';

const routes: Routes = [
  {
    path: '',
    component: HelpPage
  },
  {
    path: 'dodaj',
    loadChildren: () => import('./create/help-create.module').then( m => m.HelpCreatePageModule),
    data: {
      title: 'Pomoc / Dodaj',
      description: ' ',
      //roles: [Role.Administrator]
    },
    //canActivate: [AuthService]
  },
  {
    path: 'edytuj',
    loadChildren: () => import('./edit/help-edit.module').then( m => m.EditPageModule),
    data: {
      title: 'Pomoc / Edytuj',
      description: ' ',
      //roles: [Role.Administrator]
    },
    //canActivate: [AuthService]

  },
  {
    path: ':help_slug',
    loadChildren: () => import('./details/help-details.module').then( m => m.HelpDetailsPageModule),
    data: {
      title: 'Pomoc /',
      description: ' '
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpPageRoutingModule {}
