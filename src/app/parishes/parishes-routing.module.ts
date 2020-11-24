import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParishesPage } from './parishes.page';
import { AuthService } from '../_services/auth/auth.service';
import { Role } from '../_models/firebase.model';

const routes: Routes = [
  {
    path: '',
    component: ParishesPage,
  },
  {
    path: 'dodaj',
    loadChildren: () => import('./create/parish-create.module').then((m) => m.ParishCreatePageModule),
    data: {
      title: 'Parafie / Dodaj',
      description: 'Formularz umożliwiający dodawanie parafii do listy parafii Intencje.pl',
    },
    canActivate: [AuthService],
  },
  {
    path: 'edytuj',
    loadChildren: () => import('./edit/parishes-edit.module').then((m) => m.ParishesEditPageModule),
    data: {
      title: 'Parafie / Edytuj',
      description: ' ',
      roles: [Role.Administrator],
    },
    canActivate: [AuthService],
  },
  {
    path: ':parish_slug',
    loadChildren: () => import('./details/parish-details.module').then((m) => m.ParishDetailsPageModule),
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
export class ParishesPageRoutingModule {}
