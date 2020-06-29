import { NgModule } from '@angular/core';
import { PatronCreatePageRoutingModule } from './patron-create-routing.module';
import { PatronCreatePage } from './patron-create.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    PatronCreatePageRoutingModule,
    ComponentsModule
  ],
  declarations: [PatronCreatePage]
})
export class PatronCreatePageModule {}
