import { NgModule } from '@angular/core';
import { ArticlesEditPageRoutingModule } from './articles-edit-routing.module';
import { ArticlesEditPage } from './articles-edit.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    ArticlesEditPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ArticlesEditPage]
})
export class ArticlesEditPageModule {}
