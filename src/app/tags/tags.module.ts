import { NgModule } from '@angular/core';
import { TagsPageRoutingModule } from './tags-routing.module';
import { TagsPage } from './tags.page';
import { ComponentsModule } from '../_components/components.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [ComponentsModule, TagsPageRoutingModule, MatIconModule, MatCardModule],
  declarations: [TagsPage],
})
export class TagsPageModule {}
