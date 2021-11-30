import { Component, OnInit } from '@angular/core';
import { VolumeInfo } from 'src/app/interface/volume-info';
import { BookService } from 'src/app/services/book.service';
import { Book } from '../../interface/Book';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  title = 'searchBook';
  books?:Book[]= [];
  constructor(private BookService: BookService) { }

  ngOnInit(): void {

    
  }

  searchBooks(event:any):void{
 
    this.BookService
    .getBooks(event.target.value)?.subscribe((books:Book[]) => {
        this.books = books;
        console.log(books)

    });

  }
  

}
