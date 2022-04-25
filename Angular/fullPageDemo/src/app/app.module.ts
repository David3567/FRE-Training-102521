import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicExampleComponent } from './basic/basic.component';
// import { BasicComponent } from './basic/basic.component';

@NgModule({
  declarations: [AppComponent, BasicExampleComponent],
  imports: [BrowserModule, AppRoutingModule, AngularFullpageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
