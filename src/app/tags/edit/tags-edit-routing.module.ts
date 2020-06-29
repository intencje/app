import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TagsEditPage } from './tags-edit.page';

const routes: Routes = [
  {
    path: '',
    component: TagsEditPage
  },
  {
    path: ':tag_slug',
    loadChildren: () => import('./details/tag-edit-details.module').then( m => m.TagEditDetailsPageModule),
    data: {
      title: 'Tag / Edytuj',
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
export class TagsEditPageRoutingModule {}
