import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessagesPage } from './messages.page';

const routes: Routes = [
  {
    path: '',
    component: MessagesPage
  },
  {
    path: ':thread_id',
    loadChildren: () => import('./thread/thread.module').then( m => m.ThreadPageModule),
    data: {
      title: 'Wiadomości / ',
      description: ' ',
      //roles: [Role.Administrator, Role.Author]
    },
    //canActivate: [AuthService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagesPageRoutingModule {}
