import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeaderComponent } from './components/header/header.component';
// import { ButtonComponent } from './components/button/button.component';
import { BlogItmComponent } from './components/blog-itm/blog-itm.component';
import { BlogComponent } from './components/blog/blog.component';
import { ShortPipe } from './components/blog-itm/shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // ButtonComponent,
    BlogItmComponent,
    BlogComponent,
    ShortPipe
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
