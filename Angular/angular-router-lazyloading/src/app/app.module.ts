import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { ComponentsModule } from './components/components.module';
import { ChildModule } from './child/child.module';

import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, ComponentsModule, ChildModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
