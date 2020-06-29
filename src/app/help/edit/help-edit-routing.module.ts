import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpEditPage } from './help-edit.page';

const routes: Routes = [
  {
    path: '',
    component: HelpEditPage
  },
  {
    path: ':help_slug',
    loadChildren: () => import('./details/help-edit-details.module').then( m => m.HelpEditDetailsPageModule),
    data: {
      title: 'Pomoc / Edytuj',
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
export class HelpEditPageRoutingModule {}
