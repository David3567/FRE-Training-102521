import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent, Dialog } from './component/card/card.component';
import { HttpClientModule } from '@angular/common/http';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatCardModule } from '@angular/material/card';
// import { MatButtonModule } from '@angular/material/button';
import { MaterialExampleModule } from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    Dialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // MatCardModule,
    // MatDialogModule,
    // MatButtonModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [Dialog]
})
export class AppModule { }
