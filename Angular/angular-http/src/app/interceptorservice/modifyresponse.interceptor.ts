import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ModifyresponseInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((resp) => {
        const myBody = [
          {
            id: '1',
            name: 'TekTutorialsHub',
            html_url: 'www.tektutorialshub.com',
            description: 'description',
          },
        ];

        if (resp instanceof HttpResponse) {
          console.log(resp);
          console.log(resp.body);
          resp = resp.clone<any>({ body: myBody });
        }
        return resp;
      })
    );
  }
}
