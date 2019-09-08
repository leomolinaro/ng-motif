import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

constructor (
  protected router: Router,
  protected authService: AuthService
) { }
 
  canActivate (route, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn ()) return true;

    return this.authService.login ("leo.molinaro");

    // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    // return false;
  }
}

