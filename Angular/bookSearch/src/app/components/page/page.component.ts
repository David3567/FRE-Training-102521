import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { Book } from '../../Book';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  title = 'Angular-searchBook';
  books?:Book;
  constructor(private BookService: BookService) { }

  ngOnInit(): void {
    //  this.BookService.getBooks()
    //      .subscribe(data => this.books = data);
    
  }

  searchBooks(event:any):void{
    this.BookService.getBooks(event.target.value)?.subscribe((books:Book) => {
      if(this.books !== null){
        console.log(books)
        this.books = books
      }else{
        console.log("books is null");
      }
    });
  }
  

}
