import { Component } from '@angular/core';
import { slideToRight } from './animation/newrouter.animation';
import { slideInAnimation } from './animation/router.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent {
  title = 'angular-router';
}
