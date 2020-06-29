import { NgModule } from '@angular/core';
import { PrayersPageRoutingModule } from './prayers-routing.module';
import { PrayersPage } from './prayers.page';
import { ComponentsModule } from '../_components/components.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [PrayersPageRoutingModule, ComponentsModule, MatCardModule, MatIconModule],
  declarations: [PrayersPage],
})
export class PrayersPageModule {}
