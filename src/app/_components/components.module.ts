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
  IntentionChangeStatusDialog,
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
import { ChangeAvatarComponent } from './change-avatar/change-avatar.component';
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
    ChangeAvatarComponent,
    IntentionDeleteDialog,
    IntentionAddCommentDialog,
    IntentionChangeStatusDialog,
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
    MatMenuModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatExpansionModule,
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
    ChangeAvatarComponent,
    ImageCropperModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatExpansionModule,
  ],
  entryComponents: [IntentionDeleteDialog, IntentionAddCommentDialog, IntentionChangeStatusDialog],
})
export class ComponentsModule {}
