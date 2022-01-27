import { Component, Input, OnInit } from '@angular/core';
import { Specie } from '../pokemons_interface';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {
  @Input() species?: Specie;

  constructor() { }

  ngOnInit(): void {
  }

}
