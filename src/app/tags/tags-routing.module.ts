import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TagsPage } from './tags.page';

const routes: Routes = [
  {
    path: '',
    component: TagsPage,
  },
  {
    path: 'edytuj',
    loadChildren: () => import('./edit/tags-edit.module').then((m) => m.TagsEditPageModule),
    data: {
      title: 'Tagi / Edytuj',
      description: ' ',
      //roles: [Role.Administrator]
    },
    //canActivate: [AuthService]
  },
  {
    path: 'dodaj',
    loadChildren: () => import('./create/tag-create.module').then((m) => m.TagCreatePageModule),
    data: {
      title: 'Tagi / Dodaj',
      description: ' ',
      //roles: [Role.Administrator]
    },
    //canActivate: [AuthService]
  },
  {
    path: ':tag_slug',
    loadChildren: () => import('./details/tag-details.module').then((m) => m.TagDetailsPageModule),
    data: {
      title: 'Ładowanie',
      description: ' ',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagsPageRoutingModule {}
