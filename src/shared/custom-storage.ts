import { AuthorizationModel } from './models/authorization.model';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomStorageService {
  constructor(private cookieService: CookieService) {
  }

  getCurrentUser(): AuthorizationModel {
    const json = this.cookieService.get('currentUser');
    return json ? new AuthorizationModel(JSON.parse(json)) : null;
  }

  setCurrentUser(value: AuthorizationModel) {
    this.cookieService.set('currentUser', JSON.stringify(value), { expires: 1, path: '/' });
  }
}
