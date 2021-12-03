import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ChangerequesturlInterceptor implements HttpInterceptor {
  constructor() {}

  baseURL = 'https://jsonplaceholder.typicode.com';

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const newReq = req.clone({
      url: [this.baseURL, req.url].join('/'),
    });

    return next.handle(newReq);
  }
}
