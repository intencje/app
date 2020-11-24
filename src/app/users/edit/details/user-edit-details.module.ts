import { NgModule } from '@angular/core';
import { UserEditDetailsPageRoutingModule } from './user-edit-details-routing.module';
import { UserEditDetailsPage } from './user-edit-details.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [UserEditDetailsPageRoutingModule, ComponentsModule],
  declarations: [UserEditDetailsPage],
})
export class UserEditDetailsPageModule {}
