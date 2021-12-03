import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class TodosInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('this form todo interceptor: ', request);
    if (request.body)
      request = request.clone({
        body: {
          completed: false,
          title: 'test',
          userId: '34',
        },
      });

    return next.handle(request).pipe(
      tap((resp) => {
        console.log('this form todo interceptor: ', resp);
      }),
      catchError((err) => {
        console.log('this form todo interceptor: ', err);
        if (err.status === 404) {
          console.log('this.router.navigate(["page: 404"])');
        }
        return of(err);
      })
    );

    // catchError((err: any) => {
    //   if(err.status === 404) {
    //     console.log('this.router.navigate(["page not found: 404"])');
    //   }
    //   throwError('error')
    // })
  }
}
