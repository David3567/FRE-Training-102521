import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Book } from 'src/app/interface/books';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  books: any = [];
  constructor(private BookService: BookService) { }
   
  addToList(title: string) {
    this.BookService.addToList(title);
    console.log(this.BookService.wishList$);
  }
  
  ngOnInit(): void {
    this.BookService.books$.subscribe(data => {
      this.books = data;
    })
  }
}
