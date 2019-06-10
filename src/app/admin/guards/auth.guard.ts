import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  Route,
  NavigationExtras
} from '@angular/router';
import { Observable } from 'rxjs';

import { AdminServicesModule } from '../admin-services.module';

import { AuthService } from '../../core/services/auth.service';


@Injectable({
  providedIn: AdminServicesModule
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    console.log('CanLoad Guard is called');
    const url = `/${route.path}`;
    return this.checkLogin(url);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('CanActivateGuard is called');
    const { url } = state;
    return this.checkLogin(url);
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('CanActivateChild Guard is called');
    const { url } = state;
    return this.checkLogin(url);
  }

  private checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page
    this.router.navigate(['/login']);
    return false;
  }

}
