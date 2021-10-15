import { Injectable } from '@angular/core';
import { BaseHttpService } from 'src/shared/services/base-http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class AccountService extends BaseHttpService {
  constructor(
    protected http: HttpClient) {
    super(http);
  }

  async getDetailUser(token: string): Promise<any> {
    try {
      const newHeaders = new HttpHeaders()
        .set('Authorization', 'Bearer ' + token)
        .set('Content-Type', 'application/json; charset=utf-8')
        .set('access-control-allow-origin', '*');
      return await this.http.get(`${environment.endpoint}/auth/authen-detail`, { headers: newHeaders }).toPromise();
    } catch (e) {
      return {
        type: 'error',
        code: 'INTERNAL_SERVER_ERROR',
        message: e.message
      };
    }
  }
}
