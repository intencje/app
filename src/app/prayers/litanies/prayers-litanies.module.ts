import { NgModule } from '@angular/core';
import { PrayersLitaniesPageRoutingModule } from './prayers-litanies-routing.module';
import { PrayersLitaniesPage } from './prayers-litanies.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    PrayersLitaniesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PrayersLitaniesPage]
})
export class PrayersLitaniesPageModule {}
