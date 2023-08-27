// import { AuthService } from './../services/auth.service';
// import { Observable } from 'rxjs';

// import { Injectable } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   CanActivateFn,
//   Router,
//   RouterStateSnapshot,
// } from '@angular/router';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivateFn {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivateFn(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean> | Promise<boolean> | boolean {
//     console.log('canactivate is called');
//     const { url } = state;
//     return this.checkLogin(url);
//   }
//   private checkLogin(url: string): boolean {
//     if (this.authService.isLoggedIn) {
//       return true;
//     }
//     this.authService.redirectUrl = url;
//     this.router.navigate(['/login']);
//     return false;
//   }
// }
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Route,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanDeactivate<unknown> {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (confirm('Are you sure?')) {
      localStorage.removeItem('token');
      return true;
    }
    return false;
  }
}
