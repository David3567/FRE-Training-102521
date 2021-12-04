import { Injectable } from '@angular/core';
import {PokemonResponse} from './pokemons_interface'
import {Form} from './pokemons_interface'
import {HttpClient} from '@angular/Common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private apiUrl = "https://pokeapi.co/api/v2/pokemon/";


  constructor(private http:HttpClient) { }


  getPokemon(pokemon:string):Observable<PokemonResponse>{
    return this.http.get<PokemonResponse>(this.apiUrl + pokemon);
  }
}
