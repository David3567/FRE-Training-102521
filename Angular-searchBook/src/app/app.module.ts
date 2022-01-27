import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import { BookComponent } from './book/book.component';
import { ShowBooksComponent } from './show-books/show-books.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ShowBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    RouterModule.forRoot([
      {path: 'show-books', component: ShowBooksComponent},
      {path: '', redirectTo: '/', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
