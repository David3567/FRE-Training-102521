import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  btnVal1=0;
  btnVal2=0;
  btnVal3=0;
  btnVal4=0;
  btnVal5=0;
  btnVal6=0;
  number=0;
  //button click function

  start(){

    var max=69
    var min=1;
    this.btnVal1 = Math.floor(Math.random() * (max - min + 1)) + min; 
    this.btnVal2 = Math.floor(Math.random() * (max - min + 1)) + min; 
    this.btnVal3 = Math.floor(Math.random() * (max - min + 1)) + min; 
    this.btnVal4 = Math.floor(Math.random() * (max - min + 1)) + min; 
    this.btnVal5 = Math.floor(Math.random() * (max - min + 1)) + min; 
    this.btnVal6 = Math.floor(Math.random() * (max - min + 1)) + min; 

  }

  changeText(){
  }
}


// if (item1==1 &&item2==0 && item3==0 ){
//   this.Total+=1;
// }
// else if (item1==0 &&item2==1 && item3==0 ){
// this.Total+=1;
// }
// else if (item1==0 &&item2==0 && item3==1 ){
// this.Total+=1;
// }else{
// this.Total-=1;
// }