import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { PokemonsService } from './pokemons.service';
import { PokemonResponse } from './pokemons_interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Angular-pokemon';
  starterPokemon = [ "bulbasaur", "squirtle", "charmander" ];
  isSelected:boolean=false;

  public pokemonObsArr$!:Observable<PokemonResponse[]>

  constructor(private pokemonsService: PokemonsService){}
  ngOnInit(): void {
    this.pokemonObsArr$ = forkJoin(this.starterPokemon.map((pokemon:string):Observable<PokemonResponse>=>
      this.pokemonsService.getPokemon(pokemon)
  ));
  }

  select(index:number){
    if(this.isSelected){
      return;
    }


    if (confirm("Are you sure you want to select this pokemon?")) {
      this.isSelected=true;
      this.starterPokemon= [this.starterPokemon[index]]
      this.ngOnInit();
    } 
    
    
    // this.starterPokemon=this.starterPokemon.filter((_pokemon,i) => i === index) 
  }
}
