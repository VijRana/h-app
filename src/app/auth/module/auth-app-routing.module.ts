import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from 'E:/project_ws/angualar2_trng_ws/health-app-prod/src/app/auth/components/auth/auth.component';
import { LoginComponent } from 'E:/project_ws/angualar2_trng_ws/health-app-prod/src/app/auth/components/login/login/login.component';
import { UserRegistrationComponent } from 'E:/project_ws/angualar2_trng_ws/health-app-prod/src/app/auth/components/user-registration/user-registration.component';
import { ForgotPasswordComponent } from 'E:/project_ws/angualar2_trng_ws/health-app-prod/src/app/auth/components/forgot-password/forgot-password.component';
import {LogoutComponent} from 'E:/project_ws/angualar2_trng_ws/health-app-prod/src/app/auth/components/logout/logout.component';


const authRoutes: Routes = [
  {
    path: 'auth', component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: UserRegistrationComponent,
      },
      {
        path: 'forgotpassword',
        component: ForgotPasswordComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent,
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
