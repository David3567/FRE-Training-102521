import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PokemonResponse, Sprite } from '../pokemons_interface';


@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon?: PokemonResponse;
  @Input() index?:number=-1;
  @Output() selectedEventEmitter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  selected(){
    this.selectedEventEmitter.emit(this.index);
  }
}
