import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowActivityDetailsDirective } from './show-activity-details/show-activity-details.directive';
import { ShowUserProfileDirective } from './show-user-profile/show-user-profile.directive';
import { ShowTestimonyDetailsDirective } from './show-testimony-details/show-testimony-details.directive';
import { ShowTagDetailsDirective } from './show-tag-details/show-tag-details.directive';
import { ShowPrayerDetailsDirective } from './show-prayer-details/show-prayer-details.directive';
import { ShowPatronProfileDirective } from './show-patron-profile/show-patron-profile.directive';
import { ShowArticleDetailsDirective } from './show-article-details/show-article-details.directive';
import { ScrollerDirective } from './scroller/scroller.directive';
import { HasRoleDirective } from './has-role/has-role.directive';
import { AddSeoStuffDirective } from './add-seo-stuff/add-seo-stuff.directive';

@NgModule({
  declarations: [
    ShowActivityDetailsDirective,
    ShowUserProfileDirective,
    ShowTestimonyDetailsDirective,
    ShowTagDetailsDirective,
    ShowPrayerDetailsDirective,
    ShowPatronProfileDirective,
    ShowArticleDetailsDirective,
    ScrollerDirective,
    HasRoleDirective,
    AddSeoStuffDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShowActivityDetailsDirective,
    ShowUserProfileDirective,
    ShowTestimonyDetailsDirective,
    ShowTagDetailsDirective,
    ShowPrayerDetailsDirective,
    ShowPatronProfileDirective,
    ShowArticleDetailsDirective,
    ScrollerDirective,
    HasRoleDirective,
    AddSeoStuffDirective

  ]
})
export class DirectivesModule { }
