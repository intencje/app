import { NgModule } from '@angular/core';
import { IntentionDetailsPageRoutingModule } from './intention-details-routing.module';
import { IntentionDetailsPage } from './intention-details.page';
import { ComponentsModule } from './../../_components/components.module';

@NgModule({
  imports: [IntentionDetailsPageRoutingModule, ComponentsModule],
  declarations: [IntentionDetailsPage],
})
export class IntentionDetailsPageModule {}
