import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pokemonInfo } from './pokemon.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseurl: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getPokemon(name: string): Observable<pokemonInfo> {
    return this.http.get<pokemonInfo>(this.baseurl + name);
  } 
}
