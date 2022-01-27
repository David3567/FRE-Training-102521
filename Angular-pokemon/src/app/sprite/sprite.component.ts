import { Component, Input, OnInit } from '@angular/core';
import { Sprite } from '../pokemons_interface';

@Component({
  selector: 'app-sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.scss']
})
export class SpriteComponent implements OnInit {

  @Input() sprites?:Sprite;
  constructor() { }


  ngOnInit(): void {
  }

}
