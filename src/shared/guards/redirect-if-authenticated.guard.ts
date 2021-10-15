import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable()
export class RedirectIfAuthenticatedGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.cookieService.check('token')) {
      this.router.navigate(['/admin']);
      return false;
    } else {
      return true;
    }
  }
}
