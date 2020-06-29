import { NgModule } from '@angular/core';
import { IntentionDetailsPageRoutingModule } from './intention-details-routing.module';
import { IntentionDetailsPage } from './intention-details.page';
import { ComponentsModule } from './../../_components/components.module';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  imports: [
    IntentionDetailsPageRoutingModule,
    ComponentsModule,
    FormsModule,
    MatTabsModule,
    NgxSkeletonLoaderModule,
    MatCardModule,
    MatRippleModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatChipsModule,
  ],
  declarations: [IntentionDetailsPage],
})
export class IntentionDetailsPageModule {}
