import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pokemonInfo } from './pokemon.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseurl: string = 'https://pokeapi.co/api/v2/pokemon/';

  pokemons$: pokemonInfo[] = [];

  constructor(private http: HttpClient) { }

  getPokemon(name: string) {
    this.http.get<pokemonInfo>(this.baseurl + name).pipe(
      map(pokemon => {
        const newPokemon : pokemonInfo = {
          id: 0,
          weight: 0,
          height: 0,
          types: [],
          species:{name: ''},
          sprites: {other: {dream_world: {front_default: ''}}},
        };
        newPokemon.id = pokemon.id;
        newPokemon.weight = pokemon.weight;
        newPokemon.height = pokemon.height;
        newPokemon.types = pokemon.types;
        newPokemon.species = pokemon.species;
        newPokemon.sprites = pokemon.sprites;
        this.pokemons$.push(newPokemon);
      })
    ).subscribe();
  } 

  getAll(pokemons: string[]) {
    for (let name of pokemons) {
      this.getPokemon(name);
    }
    return this.pokemons$;
  }

}
