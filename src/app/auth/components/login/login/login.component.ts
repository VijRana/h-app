import {Component} from '@angular/core';

import {Login, LoginStatus} from 'E:/project_ws/angualar2_trng_ws/health-app-prod/src/app/auth/model/login';';
import {AuthService} from 'E:/project_ws/angualar2_trng_ws/health-app-prod/src/app/auth/services/auth.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  alertStyle = '';
  loginStatus = new LoginStatus('', '');
  model = new Login('', '');

  constructor(private authService: AuthService, private router: Router) {
  }

  onLogin() {
    this.initLogin();
    this.authService.login(this.model)
      .subscribe((status: LoginStatus) => {
        this.loginStatus = status;
        if (status.code === 'FAILURE') {
          this.alertStyle = 'alert alert-danger';
        }
      });
  }

  onLogout() {
    this.authService.logout();
  }

  private initLogin() {
    this.alertStyle = '';
    this.loginStatus.code = '';
    this.loginStatus.message = '';
  }
}
