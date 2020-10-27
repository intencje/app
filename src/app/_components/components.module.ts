import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntentionsHeaderComponent } from './intentions-header/intentions-header.component';
import { PrayersHeaderComponent } from './prayers-header/prayers-header.component';
import { UsersHeaderComponent } from './users-header/users-header.component';
import { NoContentComponent } from './no-content/no-content.component';
import {
  IntentionAddCommentDialog,
  IntentionCardComponent,
  IntentionDeleteDialog,
  IntentionSetFulfilledDialog,
  IntentionSetStaleDialog,
} from './intention-card/intention-card.component';
import { UserCardComponent } from './user-card/user-card.component';
import { PatronListItemComponent } from './patron-list-item/patron-list-item.component';
import { PrayerListItemComponent } from './prayer-list-item/prayer-list-item.component';
import { DirectivesModule } from '../_directives/directives.module';
import { TestimonyCardComponent } from './testimony-card/testimony-card.component';
import { TagListItemComponent } from './tag-list-item/tag-list-item.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { LoadNewestItemsComponent } from './load-newest-items/load-newest-items.component';
import { RouterModule } from '@angular/router';
import { SeoStuffComponent } from './seo-stuff/seo-stuff.component';
import { PrayingListItemComponent } from './praying-list-item/praying-list-item.component';
import { TabsComponent } from './tabs/tabs.component';
import { SetImageComponent, CropperDialog } from './set-image/set-image.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    IntentionsHeaderComponent,
    PrayersHeaderComponent,
    UsersHeaderComponent,
    NoContentComponent,
    UserCardComponent,
    PatronListItemComponent,
    PrayerListItemComponent,
    IntentionCardComponent,
    TestimonyCardComponent,
    TagListItemComponent,
    ArticleCardComponent,
    LoadNewestItemsComponent,
    SeoStuffComponent,
    PrayingListItemComponent,
    TabsComponent,
    SetImageComponent,
    IntentionDeleteDialog,
    IntentionAddCommentDialog,
    IntentionSetFulfilledDialog,
    IntentionSetStaleDialog,
    CropperDialog,
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    RouterModule,
    ImageCropperModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatExpansionModule,
    MatTabsModule,
    FormsModule,
    NgxSkeletonLoaderModule,
    MatRippleModule,
    MatChipsModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatChipsModule,
    MatListModule,
    MatSelectModule,
  ],
  exports: [
    IntentionsHeaderComponent,
    PrayersHeaderComponent,
    UsersHeaderComponent,
    NoContentComponent,
    UserCardComponent,
    PatronListItemComponent,
    PrayerListItemComponent,
    IntentionCardComponent,
    TestimonyCardComponent,
    TagListItemComponent,
    ArticleCardComponent,
    LoadNewestItemsComponent,
    SeoStuffComponent,
    PrayingListItemComponent,
    TabsComponent,
    CommonModule,
    DirectivesModule,
    SetImageComponent,
    ImageCropperModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    NgxSkeletonLoaderModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatExpansionModule,
    MatTabsModule,
    MatRippleModule,
    MatChipsModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatChipsModule,
    MatListModule,
    MatSelectModule,
  ],
  entryComponents: [
    IntentionDeleteDialog,
    IntentionAddCommentDialog,
    IntentionSetFulfilledDialog,
    IntentionSetStaleDialog,
    CropperDialog,
  ],
})
export class ComponentsModule {}
