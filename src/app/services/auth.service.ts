import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  login(userInfo: {
    login: string;
    password: string;
  }): Observable<string | boolean> {
    if (userInfo.login === 'admin@gmail.com' && userInfo.password === 'Admin123456') {
      this.setToken('jjdsiyeefdxgvsvs');
      return of(true);
    }
    return throwError(() => new Error('Failed Login'));
  }

  logout() {
    this.router.navigate(['login']);
  }
}
