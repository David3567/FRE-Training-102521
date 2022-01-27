import { Component, Input, OnInit } from '@angular/core';
import { Type } from '../pokemons_interface';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {
  @Input() type?:Type;

  constructor() { }

  ngOnInit(): void {
  }

}
