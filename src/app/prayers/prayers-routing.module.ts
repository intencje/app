import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrayersPage } from './prayers.page';

const routes: Routes = [
  {
    path: '',
    component: PrayersPage,
  },
  {
    path: 'akty',
    loadChildren: () => import('./acts/prayers-acts.module').then((m) => m.PrayersActsPageModule),
    data: {
      title: 'Modlitwy / Akty',
      description: ' ',
    },
  },
  {
    path: 'podstawowe',
    loadChildren: () => import('./../prayers/prayers.module').then((m) => m.PrayersPageModule),
    data: {
      title: 'Modlitwy / Podstawowe',
      description: ' ',
    },
  },
  {
    path: 'litanie',
    loadChildren: () => import('./litanies/prayers-litanies.module').then((m) => m.PrayersLitaniesPageModule),
    data: {
      title: 'Modlitwy / Litanie',
      description: ' ',
    },
  },
  {
    path: 'nowenny',
    loadChildren: () => import('./novena/prayers-novena.module').then((m) => m.PrayersNovenaPageModule),
    data: {
      title: 'Modlitwy / Nowenny',
      description: ' ',
    },
  },
  {
    path: 'tematyczne',
    loadChildren: () => import('./thematic/prayers-thematic.module').then((m) => m.PrayersThematicPageModule),
    data: {
      title: 'Modlitwy / Tematyczne',
      description: ' ',
    },
  },
  {
    path: 'dodaj',
    loadChildren: () => import('./create/prayer-create.module').then((m) => m.PrayerCreatePageModule),
    data: {
      title: 'Modlitwy / Dodaj',
      description: ' ',
      //roles: [Role.Administrator]
    },
    //canActivate: [AuthService]
  },
  {
    path: 'edytuj',
    loadChildren: () => import('./edit/prayers-edit.module').then((m) => m.PrayersEditPageModule),
    data: {
      title: 'Modlitwy / Edytuj',
      description: ' ',
      //roles: [Role.Administrator]
    },
    //canActivate: [AuthService]
  },
  {
    path: ':prayer_slug',
    loadChildren: () => import('./details/prayer-details.module').then((m) => m.PrayerDetailsPageModule),
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
export class PrayersPageRoutingModule {}
