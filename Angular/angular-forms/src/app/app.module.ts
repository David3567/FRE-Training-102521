import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { SetvalueComponent } from './setvalue/setvalue.component';
import { FormarrayComponent } from './formarray/formarray.component';
import { DynamicformarrayComponent } from './dynamicformarray/dynamicformarray.component';
import { SetvalueformarrayComponent } from './setvalueformarray/setvalueformarray.component';
import { DropdownlistComponent } from './dropdownlist/dropdownlist.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateformComponent,
    ReactiveformComponent,
    SetvalueComponent,
    FormarrayComponent,
    DynamicformarrayComponent,
    SetvalueformarrayComponent,
    DropdownlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
