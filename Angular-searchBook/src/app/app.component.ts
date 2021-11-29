import { Component } from '@angular/core';
import { books_interface } from './Books_interface';
import { BookService } from './book.service';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-searchBook';
  books?:books_interface;

  constructor(private bookService:BookService){}
  
  searchBooks(event:any):void{
    this.bookService.getBooks(event.target.value)?.subscribe((books:books_interface) => {
      if(this.books !== null){
        console.log(books)
        this.books = books
      }else{
        console.log("books is null");
      }
    });
  }

}
