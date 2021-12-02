import { Component, Inject, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';
import { pokemonInfo } from 'src/app/service/pokemon.interface';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

const starterPokemon = [ "bulbasaur", "squirtle", "charmander" ];

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  name: string = '';

  pokemons: pokemonInfo[] = [];

  constructor(private pokemonservice: PokemonService, public dialog: MatDialog) { }

  openDialog() {

    const dialogRef = this.dialog.open(Dialog, {
      width: '250px',
      height: '300px',
      data: {name: this.name},
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   this.name = result;
    //   console.log('cancel');
    // });
  }

  ngOnInit(): void {
    this.pokemons = this.pokemonservice.getAll(starterPokemon);
    console.log(this.pokemons);
  }
}

@Component ({
  selector: 'dialog',
  templateUrl: './dialog.html',
})
export class Dialog implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}
