import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoService } from './core/todo.service';
import { TodosInterceptor } from './core/todos.interceptor';

export const SelectUrl = new InjectionToken<string>('');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [
    { provide: TodoService, useClass: TodoService },
    { provide: SelectUrl, useValue: true },
    {
      provide: 'baseUrl',
      useFactory: () =>
        SelectUrl
          ? 'https://jsonplaceholder.typicode.com'
          : 'http://localhost:3000',
      deps: [SelectUrl],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TodosInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
