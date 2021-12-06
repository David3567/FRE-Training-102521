import { Injectable } from '@angular/core';
import { cards } from './cards';
import { CardData } from './card.interface';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  constructor() { }
  cards: CardData[] = [];
  
  // gameStart(): CardData[]{
  //   let newCardSet = [];
  //   let cardSet = new Set();
  //   for (let i = 0; i < this.cards.length; i++) {
  //     var item = this.cards[Math.floor(Math.random()*cards.length)];
  //     if (!cardSet.has(cards[item]) && cardSet.size < 4) {
  //       cardSet.add(item);
  //     }
      
  //   }
  //   newCardSet = Array.from(cardSet);
  //   return newCardSet;
  // }
  
  gameStart(): CardData[]{
     return this.cards = cards;
  }

 




}
