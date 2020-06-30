import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntentionsPage } from './intentions.page';
import { AuthService } from '../_services/auth/auth.service';
import { Role } from '../_models/firebase.model';

const routes: Routes = [
  {
    path: '',
    component: IntentionsPage,
  },
  {
    path: 'dodaj',
    loadChildren: () => import('./create/intention-create.module').then(m => m.IntentionCreatePageModule),
    canActivate: [AuthService],
    data: {
      title: 'Intencje / Dodaj',
      description: ' ',
    },
  },
  {
    path: 'edytuj',
    loadChildren: () => import('./edit/intentions-edit.module').then(m => m.IntentionEditPageModule),
    data: {
      title: 'Intencje / Edytuj',
      description: ' ',
      roles: [Role.Administrator, Role.Moderator],
    },
    canActivate: [AuthService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntentionsPageRoutingModule {}
