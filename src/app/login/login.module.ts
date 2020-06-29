import { NgModule } from '@angular/core';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { ComponentsModule } from '../_components/components.module';
import { LottieModule } from 'ngx-lottie';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [LoginPageRoutingModule, ComponentsModule, LottieModule, HttpClientModule],
  declarations: [LoginPage],
})
export class LoginPageModule {}
