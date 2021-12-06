import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card!:any;
  @Output() selectedCard = new EventEmitter<[]>();

  color = false;
  pokercard:string = "../../assets/images/pokercard.png";
  constructor() { }

  ngOnInit(): void {
  }
  
  selectCard():void{
    this.selectedCard.emit(this.card);
  }


  // status: boolean = false;
  flipped:boolean = false;
  clickEvent(){
      // this.status = !this.status;  
      this.flipped = !this.flipped; 
        // setTimeout(()=>{
        //   if(this.card.isSelected === false){
        //   this.flipped = !this.flipped;
        //   }
        // },2000)   
  }
  flipIt() {
    this.flipped = !this.flipped;
  }
}
// [ngClass]="{'flip-box-inner' : card.isSelected===true}" 
