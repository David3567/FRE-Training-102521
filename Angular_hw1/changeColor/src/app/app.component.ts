import { Component } from '@angular/core';
import { DataInterface } from './DataInterface';
import {DATA} from './Data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data: DataInterface[] = DATA;

  heading = 'changeColor';
  // titleBlue = 'The standard Lorem Ipsum passage, used since the 1500s';
  // titleBlack =
  //   'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC';
  // titleRed = '1914 translation by H. Rackham';
  // titleGreen =
  //   'Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC';

  titleColor = '';
  // headingColor = "'bgColor'";
  changeHeadingColor(event: string) {
    // this.headingColor = event;
    console.log(event);
    this.titleColor = event;
  }
}
