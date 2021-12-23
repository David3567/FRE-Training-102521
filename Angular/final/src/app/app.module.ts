import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './shared/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SafePipe } from './shared/safe.pipe';
import { AuthInterceptor } from './shared/auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './components/error/error.component';
import { AngularMaterialModeul } from './angular-material.module';
import { PostModeul } from './posts.module';


// import { AuthModule } from './components/auth/auth.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SafePipe,
    ErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModeul,
    PostModeul
    // AuthModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule { }
