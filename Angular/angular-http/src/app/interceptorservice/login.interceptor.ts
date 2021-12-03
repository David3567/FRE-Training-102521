import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const newrequest = request.clone({
      headers: request.headers.append('Content-Type', 'application/json'),
    });
    const started = Date.now();

    return next.handle(newrequest).pipe(
      tap((event) => {
        console.log(event);

        const elapsed = Date.now() - started;
        console.log(`Request for ${request.urlWithParams} took ${elapsed} ms.`);

        if (event instanceof HttpResponse) {
          console.log(`Response Received`);
        }
      })
    );
  }
}
