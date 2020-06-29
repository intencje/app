import { NgModule } from '@angular/core';
import { IntentionsPage } from './intentions.page';
import { IntentionsPageRoutingModule } from './intentions-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ComponentsModule } from './../_components/components.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [IntentionsPageRoutingModule, ScrollingModule, ComponentsModule, InfiniteScrollModule],
  declarations: [IntentionsPage],
})
export class IntentionsPageModule {}
