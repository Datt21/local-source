import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ResetPass } from '../models/reset-password';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService,
  ) { }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.endpoint}` + '/auth', {
      username,
      password,
    });
  }

  resetPass(resetpass: ResetPass): Observable<any> {
    return this.http.post<any>(
      `${environment.endpoint}` + '/auth/reset-password',
      resetpass
    );
  }

  saveTokenToCookie(token: string) {
    this.cookieService.set('token', token, { expires: 1, path: '/' });
  }

  getToken(): string {
    return this.cookieService.get('token');
  }


  logout() {
    setTimeout(() => {
      this.cookieService.deleteAll('/');
      this.router.navigate(['/login']);
    }, 500);
  }
}
