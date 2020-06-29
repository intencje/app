import { NgModule } from '@angular/core';
import { HelpCreatePageRoutingModule } from './help-create-routing.module';
import { HelpCreatePage } from './help-create.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    HelpCreatePageRoutingModule,
    ComponentsModule
  ],
  declarations: [HelpCreatePage]
})
export class HelpCreatePageModule {}
