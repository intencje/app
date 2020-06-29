import { NgModule } from '@angular/core';
import { UsersPageRoutingModule } from './users-routing.module';
import { UsersPage } from './users.page';
import { ComponentsModule } from '../_components/components.module';

@NgModule({
  imports: [
    UsersPageRoutingModule,
    ComponentsModule
  ],
  declarations: [UsersPage]
})
export class UsersPageModule {}
