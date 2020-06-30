import { NgModule } from '@angular/core';
import { IntentionCreatePageRoutingModule } from './intention-create-routing.module';
import { IntentionCreatePage } from './intention-create.page';
import { ComponentsModule } from './../../_components/components.module';
import { LottieModule } from 'ngx-lottie';

@NgModule({
  imports: [IntentionCreatePageRoutingModule, ComponentsModule, LottieModule],
  declarations: [IntentionCreatePage],
})
export class IntentionCreatePageModule {}
