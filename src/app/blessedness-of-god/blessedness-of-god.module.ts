import { NgModule } from '@angular/core';
import { BlessednessOfGodPageRoutingModule } from './blessedness-of-god-routing.module';
import { BlessednessOfGodPage } from './blessedness-of-god.page';
import { ComponentsModule } from '../_components/components.module';

@NgModule({
  imports: [BlessednessOfGodPageRoutingModule, ComponentsModule],
  declarations: [BlessednessOfGodPage],
})
export class BlessednessOfGodPageModule {}
