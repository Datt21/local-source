import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { BaseResponse } from '../models/base-response';

@Injectable()
export class BaseHttpService {

  constructor(protected http: HttpClient) {
  }

  private static generateParamsFrom(params?: Object): HttpParams {
    let httpParams = new HttpParams();
    for (const item in params) {
      if (params.hasOwnProperty(item) && params[item]) {
        httpParams = httpParams.set(item, params[item]);
      }
    }
    return httpParams;
  }

  protected async getAsync(path, params?: object): Promise<any> {
    try {
      const httpParams = BaseHttpService.generateParamsFrom(params);
      return await this.http.get<BaseResponse<any>>(`${environment.endpoint}/${path}`, {
        params: httpParams,
      }).toPromise();
    } catch (e) {
      return {
        type: 'error',
        code: 'INTERNAL_SERVER_ERROR',
        message: e.message
      };
    }
  }

  protected async postAsync(path, body?: object): Promise<any> {
    try {
      return await this.http.post(`${environment.endpoint}/${path}`, body).toPromise();
    } catch (e) {
      return {
        type: 'error',
        code: 'INTERNAL_SERVER_ERROR',
        message: e.message
      };
    }
  }

  protected async putAsync(path, body?: object): Promise<any> {
    try {
      return await this.http.put(`${environment.endpoint}/${path}`, body).toPromise();
    } catch (e) {
      return {
        type: 'error',
        code: 'INTERNAL_SERVER_ERROR',
        message: e.message
      };
    }
  }

  protected async deleteAsync(path): Promise<any> {
    try {
      return await this.http.delete(`${environment.endpoint}/${path}`).toPromise();
    } catch (e) {
      return {
        type: 'error',
        code: 'INTERNAL_SERVER_ERROR',
        message: e.message
      };
    }
  }

}
