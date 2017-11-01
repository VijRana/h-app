import { Component } from '@angular/core';

import { Login } from 'E:/project_ws/angualar2_trng_ws/health-app-prod/src/app/auth/model/login';

@Component({
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent {

  model = new Login('', '');

  onSubmit() {
    console.log('To be implemented');
  }
}
