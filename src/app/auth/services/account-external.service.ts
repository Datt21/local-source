import { Injectable } from '@angular/core';
import { BaseHttpService } from 'src/shared/services/base-http.service';
import { HttpClient } from '@angular/common/http';
import { ChangePassword } from '../models/change-password';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable()
export class AccountExternalService extends BaseHttpService {

  constructor(protected http: HttpClient, private auth: AuthService) {
    super(http);
  }

  async changePasswordAsync(model: ChangePassword): Promise<any> {
    try {
      const token = this.auth.getToken();
      const newHeaders = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      };
      return await this.http.post(`${environment.endpoint}/change-password`, model, { headers: newHeaders }).toPromise();
    } catch (e) {
      return {
        type: 'error',
        code: 'INTERNAL_SERVER_ERROR',
        message: e.message
      };
    }
  }
}
