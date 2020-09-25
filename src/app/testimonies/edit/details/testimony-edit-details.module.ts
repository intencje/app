import { NgModule } from '@angular/core';
import { TestimonyEditDetailsPageRoutingModule } from './testimony-edit-details-routing.module';
import { TestimonyEditDetailsPage } from './testimony-edit-details.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    TestimonyEditDetailsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TestimonyEditDetailsPage]
})
export class TestimonyEditDetailsPageModule {}
