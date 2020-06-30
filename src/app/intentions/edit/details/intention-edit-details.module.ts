import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IntentionEditDetailsPageRoutingModule } from './intention-edit-details-routing.module';
import { IntentionEditDetailsPage } from './intention-edit-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IntentionEditDetailsPageRoutingModule
  ],
  declarations: [IntentionEditDetailsPage]
})
export class IntentionEditDetailsPageModule {}
