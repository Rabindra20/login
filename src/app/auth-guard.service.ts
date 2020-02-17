import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { setupTestingRouter } from '@angular/router/testing';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private route: Router) {     
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(localStorage.getItem('isLogin') === "true")
    return true;
    else
    this.route.navigateByUrl('/login');
  }
}
