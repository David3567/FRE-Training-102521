import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='search-book';

  toolBar = [
    { name: 'Home', dest: '#'},
    { name: 'Show Wishlist', dest: 'src/app/components/showlist/showlist.component.html'}
  ];

  newTitle : string = '';

  getTitle(title: string) {

    this.newTitle = title;
  }

}
