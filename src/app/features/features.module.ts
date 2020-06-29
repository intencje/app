import { NgModule } from '@angular/core';
import { FeaturesPageRoutingModule } from './features-routing.module';
import { FeaturesPage } from './features.page';
import { ComponentsModule } from '../_components/components.module';

@NgModule({
  imports: [
    FeaturesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FeaturesPage]
})
export class FeaturesPageModule {}
