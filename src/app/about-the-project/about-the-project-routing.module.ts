import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutTheProjectPage } from './about-the-project.page';

const routes: Routes = [
  {
    path: '',
    component: AboutTheProjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutTheProjectPageRoutingModule {}
