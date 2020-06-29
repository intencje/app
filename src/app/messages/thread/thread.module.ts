import { NgModule } from '@angular/core';
import { ThreadPageRoutingModule } from './thread-routing.module';
import { ThreadPage } from './thread.page';
import { ComponentsModule } from 'src/app/_components/components.module';

@NgModule({
  imports: [
    ThreadPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ThreadPage]
})
export class ThreadPageModule {}
