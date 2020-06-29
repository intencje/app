import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersPage } from './users.page';

const routes: Routes = [
  {
    path: '',
    component: UsersPage,
  },
  {
    path: ':user_id/edytuj',
    loadChildren: () => import('./edit/details/user-edit-details.module').then(m => m.UserEditDetailsPageModule),
    data: {
      title: 'Użytkownicy / Edytuj profil',
      description: ' ',
    },
  },
  {
    path: ':user_id',
    loadChildren: () => import('./details/user-details.module').then(m => m.UserDetailsPageModule),
    data: {
      title: 'Użytkownicy / ',
      description: ' ',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersPageRoutingModule {}
