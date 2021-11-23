import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { News1Component } from './components/news1/news1.component';
import { News2Component } from './components/news2/news2.component';
import { News3Component } from './components/news3/news3.component';
import { News4Component } from './components/news4/news4.component';

@NgModule({
  declarations: [
    AppComponent,
    News1Component,
    News2Component,
    News3Component,
    News4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
