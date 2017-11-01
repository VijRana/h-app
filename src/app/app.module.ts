import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login/login.component';
import { LogoutComponent } from './auth/components/logout/logout.component';
import { ForgotPasswordComponent } from './auth/components/forgot-password/forgot-password.component';
import { UserRegistrationComponent } from './auth/components/user-registration/user-registration.component';
import { AuthComponent } from './auth/components/auth/auth.component';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { AuthModule } from 'E:/project_ws/angualar2_trng_ws/health-app-prod/src/app/auth/module/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    ForgotPasswordComponent,
    UserRegistrationComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,CommonModule, FormsModule, RouterModule, AuthModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
