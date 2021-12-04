import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { pokeInfo } from './shared/pokeInfo.Interface';
import { PokemonService } from './shared/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Pokemon';
  
  Pokemons$?:Observable<pokeInfo[]>;
  starterPokemon = [ "bulbasaur", "squirtle", "charmander" ];
  PokemonService: any;
  isSelected:boolean=false;

  constructor(public pokemonservice: PokemonService) { }

  ngOnInit(): void {
    this.Pokemons$ = forkJoin (
      this.starterPokemon.map((name : string): Observable<pokeInfo> => 
        this.pokemonservice.getPokemon(name)
      )
      
    )
    // .subscribe(console.log);
    
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
  }


}
