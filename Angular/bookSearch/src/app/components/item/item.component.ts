import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/interface/Book';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() book?: Book;
  
  constructor() { }

  ngOnInit(): void {
   console.log(this.book?.title + 'item');
  }

}
