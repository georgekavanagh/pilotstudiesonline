import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpInterceptor, HttpContextToken
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export const AUTHORIZATION = new HttpContextToken(() => `Bearer ${JSON.parse(window.localStorage.getItem('profile'))?.token}`);

export const CONTENT_TYPE = new HttpContextToken(() => 'application/json');

export class HttpIntercept implements HttpInterceptor {
  profile: any = btoa(JSON.parse(window.localStorage.getItem('profile')));
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let modifiedReq: HttpRequest<any>;
    modifiedReq = request.clone({
    headers: request.headers
      .set('Authorization', request.context.get(AUTHORIZATION))
      .set('Content-Type', request.context.get(CONTENT_TYPE))
    });
    return next.handle(modifiedReq)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = `${error.error.title}`;
          return throwError(errorMessage);
        })
      )
  }
}
