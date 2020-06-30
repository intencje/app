import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IntentionsEditPageRoutingModule } from './intentions-edit-routing.module';
import { IntentionsEditPage } from './intentions-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IntentionsEditPageRoutingModule
  ],
  declarations: [IntentionsEditPage]
})
export class IntentionEditPageModule {}
