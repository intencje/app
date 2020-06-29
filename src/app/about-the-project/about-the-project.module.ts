import { NgModule } from '@angular/core';
import { AboutTheProjectPageRoutingModule } from './about-the-project-routing.module';
import { AboutTheProjectPage } from './about-the-project.page';
import { ComponentsModule } from '../_components/components.module';


@NgModule({
  imports: [
    AboutTheProjectPageRoutingModule,
    ComponentsModule

  ],
  declarations: [AboutTheProjectPage]
})
export class AboutTheProjectPageModule {}
