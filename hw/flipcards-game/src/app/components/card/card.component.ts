import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations'

export interface cardData {
  id: string;
  state: 'default' | 'flipped' | 'matched';
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('cardFlip', [
      state('defalut', style({
        transform: 'none',
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      state('matched', style({
        visibility: 'false',
        transform: 'scale(0.05)',
        opacity: 0
      })),
      transition('default => flipped', [
        animate('500ms')
      ]),
      transition('flipped => default', [
        animate('500ms')
      ]),
      transition('* => matched', [
        animate('500ms')
      ])
    ])
  ]
})
  
export class CardComponent implements OnInit {
  @Input() data!: cardData;
  @Output() cardClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
