import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-pipe';

  obj = {
    name: 'Jojo',
    age: 18,
  };
  objkeys = Object.keys(this.obj);
  objvalues = Object.values(this.obj);
}
