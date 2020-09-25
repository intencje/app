import { NgModule } from '@angular/core';
import { TestimonyDetailsPageRoutingModule } from './testimony-details-routing.module';
import { TestimonyDetailsPage } from './testimony-details.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    TestimonyDetailsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TestimonyDetailsPage]
})
export class TestimonyDetailsPageModule {}
