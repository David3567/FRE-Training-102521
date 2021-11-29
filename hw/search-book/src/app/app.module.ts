import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { HttpClientModule } from '@angular/common/http';
import { InputComponent } from './components/input/input.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ShowlistComponent } from './components/showlist/showlist.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    WishlistComponent,
    InputComponent,
    ShowlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
