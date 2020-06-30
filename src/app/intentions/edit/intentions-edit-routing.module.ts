import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntentionsEditPage } from './intentions-edit.page';

const routes: Routes = [
  {
    path: '',
    component: IntentionsEditPage
  },
  {
    path: ':intention_slug',
    loadChildren: () => import('./details/intention-edit-details.module').then( m => m.IntentionEditDetailsPageModule),
    data: {
      title: 'Intencje / Edytuj',
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
export class IntentionsEditPageRoutingModule {}
