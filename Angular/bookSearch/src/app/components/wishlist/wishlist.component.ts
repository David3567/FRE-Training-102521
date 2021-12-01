import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  
  constructor(private BookService: BookService) { }
  wishList: string[] = [];

  ngOnInit(): void {
    this.BookService.wishList$.subscribe((newList: string[]) => {
      this.wishList = newList;
    })
  }

  delete(title: string) {
    this.BookService.deleteFromList(title);
  }


}
