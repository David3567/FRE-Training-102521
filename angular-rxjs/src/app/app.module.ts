import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ChildComponent } from './child/child.component';
import { OperatorsComponent } from './operators/operators.component';
import { CustomPipe } from './custom.pipe';

@NgModule({
  declarations: [AppComponent, ViewchildComponent, ChildComponent, OperatorsComponent, CustomPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
