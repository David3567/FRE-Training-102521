import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  title: string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.';
  content: string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate sed accusamus earum consequatur atque in pariatur adipisci cum temporibus ducimus non, ratione vitae fugit quasi, enim sunt dolor obcaecati quas!';
  @Input() btnText: string = '';
  @Input() color: string = '';
  // @Input() borderStyle: string = '';
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(color: string) {
    this.btnClick.emit(color);    

    // if (color === 'blue') {
    //   this.borderStyle = 'blue';
    // } else if (color === 'black') {
    //   this.borderStyle = 'black';
    // } else if (color === 'red') {
    //   this.borderStyle = 'red';
    // } else if (color === 'green') {
    //   this.borderStyle = 'green';
    // }
  }
}
