import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/internal/operators';
import { throwError, Observable } from 'rxjs/index';
import { AuthService } from '../../app/auth/services/auth.service';
import { ResponseTypeEnum } from '@shared/enums/response-type.enum';
import { ResponseCodeEnum } from '@shared/enums/response-code.enum';

@Injectable()
export class SharedInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Retrieve the token, if any
    const newHeaders = {
      'Content-Type': 'application/json',
    };
    const token = this.auth.getToken();
    // If have a token then append to new headers
    if (token) {
      Object.assign(newHeaders, {
        Authorization: `Bearer ${token}`
      });
    }
    const authReq = req.clone({
      setHeaders: newHeaders
    });

    return next.handle(authReq)
      .pipe(
        tap((evt: HttpResponse<any>) => {
          if (evt instanceof HttpResponse
            && evt?.body?.type === ResponseTypeEnum.ERROR
            && evt?.body?.code === ResponseCodeEnum.UNAUTHORIZED) {
            this.auth.logout();
          }
        }),
        catchError((err: HttpErrorResponse) => {
          if (err.status === 401) {
            this.auth.logout();
          }
          return throwError(err);
        }),
      );
  }
}
