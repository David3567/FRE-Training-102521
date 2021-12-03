import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';

@Injectable()
export class CancelcurrentrequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const NotLoggedIn = 'now login';

    if (NotLoggedIn) {
      return EMPTY;
    }

    return next.handle(req);
  }
}
