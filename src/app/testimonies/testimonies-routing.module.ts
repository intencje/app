import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestimoniesPage } from './testimonies.page';
import { AuthService } from '../_services/auth/auth.service';
import { Role } from '../_models/firebase.model';

const routes: Routes = [
  {
    path: '',
    component: TestimoniesPage,
  },
  {
    path: 'dodaj',
    loadChildren: () => import('./create/testimony-create.module').then((m) => m.TestimonyCreatePageModule),
    data: {
      title: 'Świadectwa / Dodaj',
      description: 'TESTIMONY_ADD_PAGE.DESCRIPTION',
    },
    canActivate: [AuthService],
  },
  {
    path: 'edytuj',
    loadChildren: () => import('./edit/testimonies-edit.module').then((m) => m.TestimoniesEditPageModule),
    data: {
      title: 'Świadectwa / Edytuj',
      description: ' ',
      roles: [Role.Administrator],
    },
    canActivate: [AuthService],
  },
  {
    path: ':testimony_slug',
    loadChildren: () => import('./details/testimony-details.module').then((m) => m.TestimonyDetailsPageModule),
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
export class TestimoniesPageRoutingModule {}
