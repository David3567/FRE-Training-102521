import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {


  toolBar = [
    { name: 'Home', dest: 'src/app/app.component.html'},
    { name: 'Show Wishlist', dest: '#'}
  ];

  constructor(private BookService: BookService) { }    

  wishList: string[] = [];

  ngOnInit(): void {
    this.BookService.wishList$.subscribe((newList: string[]) => {
      this.wishList = newList;
    })
  }

}

