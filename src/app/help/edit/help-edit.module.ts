import { NgModule } from '@angular/core';
import { HelpEditPageRoutingModule } from './help-edit-routing.module';
import { HelpEditPage } from './help-edit.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    HelpEditPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HelpEditPage]
})
export class EditPageModule {}
