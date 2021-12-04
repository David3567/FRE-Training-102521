import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { forkJoin, Observable } from 'rxjs';

import { pokeInfo } from 'src/app/shared/pokeInfo.Interface';
import { PokemonService } from 'src/app/shared/pokemon.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() Pokemon?:pokeInfo;
  @Input() index?:number=-1;
  @Output() selectedEventEmitter = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {

  }
  selected(){
    this.selectedEventEmitter.emit(this.index);
  }
    
}
