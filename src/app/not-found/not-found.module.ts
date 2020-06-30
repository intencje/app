import { NgModule } from '@angular/core';
import { NotFoundPageRoutingModule } from './not-found-routing.module';
import { NotFoundPage } from './not-found.page';
import { ComponentsModule } from '../_components/components.module';

@NgModule({
  imports: [
    NotFoundPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NotFoundPage]
})
export class NotFoundPageModule {}
