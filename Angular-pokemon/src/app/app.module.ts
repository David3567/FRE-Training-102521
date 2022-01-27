import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/Common/http';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { SpriteComponent } from './sprite/sprite.component';
import { SpeciesComponent } from './species/species.component';
import { TypeComponent } from './type/type.component'

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
    SpriteComponent,
    SpeciesComponent,
    TypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
