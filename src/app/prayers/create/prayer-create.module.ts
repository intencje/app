import { NgModule } from '@angular/core';
import { PrayerCreatePageRoutingModule } from './prayer-create-routing.module';
import { PrayerCreatePage } from './prayer-create.page';
import { ComponentsModule } from 'src/app/_components/components.module';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { EditorMatFormControlDirective } from '../../_directives/tinymce-angular-material/tinymce-angular-material.directive';
//import { MatContenteditableModule } from 'mat-contenteditable';
import { MatContenteditableModule } from '@finosofica/mat-contenteditable';

@NgModule({
  imports: [PrayerCreatePageRoutingModule, ComponentsModule, EditorModule, MatContenteditableModule],
  providers: [{ provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }],
  declarations: [PrayerCreatePage, EditorMatFormControlDirective],
})
export class PrayerCreatePageModule {}
