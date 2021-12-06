import { Component, OnInit } from '@angular/core';
import {allCards} from './allCards'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Angular-flipcard';

  cards:any = allCards;
  shuffledCards:any;

  clickedCard:any = [];


  ngOnInit(){
    // this.shuffledCards = this.cards.sort((a:any, b:any) => 0.5 - Math.random());
    this.shuffledCards = this.cards.sort(() => Math.random() - 0.5);
  }

  onCardSelect(event:any){
    if(this.clickedCard.length<2){
        this.clickedCard.push(event);
        console.log(this.clickedCard);
        event.isSelected = true;
        if(this.clickedCard.length ===2){
          if(this.clickedCard[0].name === this.clickedCard[1].name){
          }else{
            setTimeout(()=>{
              return this.cards.map((card: { isSelected: any; }) => card.isSelected = false)
               
                // for(let i = 0; i <this.cards.length; i++){
                // if(this.cards.name ===this.clickedCard[0].name ||this.cards.name ===this.clickedCard[1].name ){
                //    this.cards.isSelected = false;
                // }
              // }
            
            },2000) 
           
          }
          this.clickedCard = [];
        }
      }else{
        return;
      }
  }
}
