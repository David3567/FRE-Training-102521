import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { pokeInfo } from './pokeInfo.Interface';
import { pluck, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService implements OnInit {

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
  
  }
 
  // subscription: Array<Subscription> = [];



  getPokemon(pokemonName:string) : Observable<pokeInfo> {
    
    return this.http.get<pokeInfo>('https://pokeapi.co/api/v2/pokemon/' + pokemonName);

  }
  

  
}
