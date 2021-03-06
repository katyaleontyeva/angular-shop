import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  message: string;
  private unsubscribe: Subject<void> = new Subject();

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.setMessage();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onLogin() {
    this.message = 'Logging in ...';
    this.authService
      .login()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        () => {
          this.setMessage();

          if (this.authService.isLoggedIn && this.authService.redirectUrl) {
            this.router.navigate([this.authService.redirectUrl]);
          }

        },
        err => console.log(err),
      );
  }

  onLogout() {
    this.authService.logout();
    this.setMessage();
  }

  private setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

}
