import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) { }
  

  canActivate(route : ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    if (this.authService.user$.getValue()){
      return true;
    }

    //attempted url for redirect
    this.authService.redirectUrl = state.url;
    this.router.navigate(['/login']);
    return false;
  }


}
