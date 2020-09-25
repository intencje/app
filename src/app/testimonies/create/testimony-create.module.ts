import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TestimonyCreatePageRoutingModule } from './testimony-create-routing.module';
import { TestimonyCreatePage } from './testimony-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TestimonyCreatePageRoutingModule
  ],
  declarations: [TestimonyCreatePage]
})
export class TestimonyCreatePageModule {}
