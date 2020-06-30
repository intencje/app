import { NgModule } from '@angular/core';
import { UserDetailsPageRoutingModule } from './user-details-routing.module';
import { UserDetailsPage } from './user-details.page';
import { ComponentsModule } from 'src/app/_components/components.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [UserDetailsPageRoutingModule, ComponentsModule, MatChipsModule, MatCardModule, MatIconModule],
  declarations: [UserDetailsPage],
})
export class UserDetailsPageModule {}
