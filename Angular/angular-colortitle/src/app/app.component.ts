import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'It’s like the elephant in the room,” Doctors urge caution as COVID-19 cases rise in Oklahoma again';
  color: string = "";
  bColor1: string = "";
  bColor2: string = "";
  bColor3: string = "";
  bColor4: string = "";
  isSolid: string = "";
  radius: string = "";

  
  titleColorChange1() {
    this.color = "blue";
    this.isSolid = "solid";
    this.bColor1 = "blue";
    this.radius = "5%";
  }
  titleColorChange2() {
    this.color = "black";
    this.isSolid = "solid";
    this.bColor2 = "black";
    this.radius = "5%";
  }
  titleColorChange3() {
    this.color = "green";
    this.isSolid = "solid";
    this.bColor3 = "green";
    this.radius = "5%";
  }
  titleColorChange4() {
    this.color = "red";
    this.isSolid = "solid";
    this.bColor4 = "red";
    this.radius = "5%";
  }
}
