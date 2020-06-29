import { NgModule } from '@angular/core';
import { PatronsEditPageRoutingModule } from './patrons-edit-routing.module';
import { PatronsEditPage } from './patrons-edit.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    PatronsEditPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PatronsEditPage]
})
export class PatronsEditPageModule {}
