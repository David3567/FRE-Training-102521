import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleInterceptor } from './example.interceptor';
import { InterceptorComponent } from './interceptor/interceptor.component';
import { CatchingerrorInterceptor } from './interceptorservice/catchingerror.interceptor';
import { ChangerequesturlInterceptor } from './interceptorservice/changerequesturl.interceptor';
import { LoginInterceptor } from './interceptorservice/login.interceptor';

@NgModule({
  declarations: [AppComponent, InterceptorComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ExampleInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ChangerequesturlInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CatchingerrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
