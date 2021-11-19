import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { BlueComponent } from './blue/blue.component';
import { BlackComponent } from './black/black.component';
import { RedComponent } from './red/red.component';
import { GreenComponent } from './green/green.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component,
    BlueComponent,
    BlackComponent,
    RedComponent,
    GreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
