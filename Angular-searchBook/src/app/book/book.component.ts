import { Component, OnInit, Input } from '@angular/core';
import { book_interface } from '../Books_interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() bookItem:any=null;
 
  constructor() { }

  ngOnInit(): void {
    this.bookItem=this.bookItem.volumeInfo;
  }

}
