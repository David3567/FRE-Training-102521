import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'It’s like the elephant in the room,” Doctors urge caution as COVID-19 cases rise in Oklahoma again';
  color: string = "";
  isSolid: string = "";

  
  titleColorChange() {
    this.color = "blue";
    this.isSolid = "solid";
  }
}
