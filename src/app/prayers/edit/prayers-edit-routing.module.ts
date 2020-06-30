import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrayersEditPage } from './prayers-edit.page';

const routes: Routes = [
  {
    path: '',
    component: PrayersEditPage
  },
  {
    path: ':prayer_slug',
    loadChildren: () => import('./details/prayer-edit-details.module').then( m => m.PrayerEditDetailsPageModule),
    data: {
      title: 'Modlitwa / Edytuj',
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
export class PrayersEditPageRoutingModule {}
