import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChildComponent } from './components/lifecycle/child/child.component';

import { MainComponent } from './components/lifecycle/main/main.component';
import { GrandChildComponent } from './components/lifecycle/grandchild/grandchild.component';
import { NgfortrackbyComponent } from './components/ngfortrackby/ngfortrackby.component';
import { CustomdirectiveComponent } from './components/customdirective/customdirective.component';
import { CustomDirective } from './components/customdirective/custom.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChildComponent,
    GrandChildComponent,
    NgfortrackbyComponent,
    CustomdirectiveComponent,
    CustomDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
