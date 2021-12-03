import { Component, Inject, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';
import { pokemonInfo } from 'src/app/service/pokemon.interface';
import { MatDialog } from '@angular/material/dialog';
import { forkJoin, Observable } from 'rxjs';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

// const starterPokemon = [ "bulbasaur", "squirtle", "charmander" ];
const starterPokemon = {
  bulbasaur: "bulbasaur",
  squirtle: "squirtle",
  charmander: "charmander"
}

@Component({
  selector: 'app-card',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public pokemons$!: Observable<pokemonInfo[]>;

  public selectedPokemon: pokemonInfo = {
    id: 0,
    weight: 0,
    height: 0,
    types: [],
    species: {name: ''},
    sprites: {other: {dream_world: {front_default: ''}}}
  };

  constructor(public pokemonservice: PokemonService, public dialog: MatDialog) { }

  openDialog(pokemon: pokemonInfo) {

    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      height: '200px',
      data: pokemon
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selectedPokemon = result;
      }
    });
  }

  ngOnInit() {
    this.pokemons$ = forkJoin (
      Object.values(starterPokemon).map(name => 
        this.pokemonservice.getPokemon(name)
      )
    )
  }
}

