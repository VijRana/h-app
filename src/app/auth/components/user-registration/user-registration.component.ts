import { Component } from '@angular/core';

import {NewUser, SignupStatus} from 'E:/project_ws/angualar2_trng_ws/health-app-prod/src/app/auth/model/login';
import {AuthService} from 'E:/project_ws/angualar2_trng_ws/health-app-prod/src/app/auth/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './user-registration.component.html'
})
export class UserRegistrationComponent {
  alertStyle = 'alert alert-success';
  signupStatus = new SignupStatus();
  model = new NewUser();
  isDoctor = false;

  constructor(private authService: AuthService) {}

  onSubmit() {
    if (this.isDoctor) {
      this.model.role = 1;
    }
    this.authService.signup(this.model)
      .then((status: SignupStatus) => {
        this.signupStatus.code = status.code;
        this.signupStatus.message = status.message;
        if (this.signupStatus.code === 'USER_ACCOUNT_EXISTS') {
          this.alertStyle = 'alert alert-danger';
        }
      });
    this.alertStyle = 'alert alert-success';
  }
}

