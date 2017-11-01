import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthComponent } from 'E:/project_ws/angualar2_trng_ws/health-app-prod/src/app/auth/components/auth/auth.component';

import { LoginComponent } from 'E:/project_ws/angualar2_trng_ws/health-app-prod/src/app/auth/components/login/login/login.component';
import { UserRegistrationComponent } from './auth/components/user-registration/user-registration.component';
import { ForgotPasswordComponent } from './auth/components/forgot-password/forgot-password.component';

import { AuthService } from 'E:/project_ws/angualar2_trng_ws/health-app-prod/src/app/auth/services/auth.service';

import {  AuthRoutingModule } from './auth-app-routing.module';
import { LogoutComponent } from 'E:/project_ws/angualar2_trng_ws/health-app-prod/src/app/auth/components/logout/logout.component';
import {CommonModule} from '@angular/common';


@NgModule({
  imports:      [ CommonModule, FormsModule, AuthRoutingModule ],
  declarations: [ AuthComponent, LoginComponent,
    UserRegistrationComponent, ForgotPasswordComponent, LogoutComponent],
   providers: [ {provide: AuthService, useClass: AuthService}
  ]
})
export class AuthModule { }
