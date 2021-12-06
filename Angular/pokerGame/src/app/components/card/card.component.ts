import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { animate, state, style, transition, trigger} from '@angular/animations';
import { CardData } from 'src/app/shared/card.interface';
import { cards } from 'src/app/shared/cards';
import { CardServiceService } from 'src/app/shared/card-service.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger("cardFlip", [
      state(
        "default",
        style({
          transform: "none"
        })
      ),
      state(
        "flipped",
        style({
          transform: "rotateY(180deg)"
        })
      ),
 
      transition("default => flipped", [animate("400ms")]),
      transition("flipped => default", [animate("400ms")]),
  
    ])
  ]
})
export class CardComponent implements OnInit {

  cards: CardData[] = [];  
  newList: CardData[] = [];
  message: string = '';

  constructor(private CardService: CardServiceService) { }

  ngOnInit(): void {
    this.cards = this.CardService.gameStart();
  }

  cardClicked(card: CardData) {
    // step 1, flip the card
    this.newList.push(card);
    this.cardFlip(card);
    // check value
    if (this.newList.length === 2 && card.value === this.newList[0].value) {
      this.cardFlip(card), this.cardFlip(this.newList[0]);
      this.message = 'You win!!!'
    } else if (this.newList.length > 2) {
      this.setToDefault();
      this.message = 'Try Again!!!'
    }
  }
  cardFlip(card: CardData) {
    if (card.state === 'default') {
      card.state = 'flipped';
    } else {
      card.state = 'default';
    }
  }
  setToDefault() {
    for (let i = 0; i < this.newList.length; i++) {
      this.newList[i].state = 'default';
    }
    this.newList = [];
  }


}
