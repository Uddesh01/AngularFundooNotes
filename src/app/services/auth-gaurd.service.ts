import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(public router:Router) { }

  canActivate(
    routerSnapshot: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if(localStorage.getItem('authToken')) {
      return true;
    } else {
      
      return this.router.createUrlTree(['/login']);
    }
  }
}
