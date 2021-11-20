import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.';
  titleStyle: string = '';

  toggle(color: string) {
    this.titleStyle = color;
  }
}
