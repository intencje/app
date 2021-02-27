import { NgModule } from '@angular/core';
import { IntentionCreatePageRoutingModule } from './intention-create-routing.module';
import { IntentionCreatePage } from './intention-create.page';
import { ComponentsModule } from './../../_components/components.module';

@NgModule({
  imports: [IntentionCreatePageRoutingModule, ComponentsModule],
  declarations: [IntentionCreatePage],
})
export class IntentionCreatePageModule {}
