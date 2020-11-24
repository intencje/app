import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestimoniesEditPage } from './testimonies-edit.page';

const routes: Routes = [
  {
    path: '',
    component: TestimoniesEditPage,
  },
  {
    path: ':testimony_slug',
    loadChildren: () => import('./details/testimony-edit-details.module').then((m) => m.TestimonyEditDetailsPageModule),
    data: {
      title: 'Świadectwo / Edytuj',
      description: ' ',
      //roles: [Role.Administrator]
    },
    //canActivate: [AuthService]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestimoniesEditPageRoutingModule {}
