import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular HomeWork 1';
  bluecolor=0;
  blackcolor=1;
  greencolor=0;
  redcolor=0;

  getBlue(){
    this.bluecolor=1;
    this.blackcolor=0;
    this.greencolor=0;
    this.redcolor=0;
  }
  getBlack(){
    this.bluecolor=0;
    this.blackcolor=1;
    this.greencolor=0;
    this.redcolor=0;
  }
  getRed(){
    this.bluecolor=0;
    this.blackcolor=0;
    this.greencolor=0;
    this.redcolor=1;
  }
  getGreen(){
    this.bluecolor=0;
    this.blackcolor=0;
    this.greencolor=1;
    this.redcolor=0;
  }
}

