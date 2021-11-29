import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'search-book';

  toolBar = [
    { name: 'Home', dest: '/home' },
    { name: 'Show Wishlist', dest: '/showlist' }
  ];

}
