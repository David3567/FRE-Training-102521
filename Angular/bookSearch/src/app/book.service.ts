import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiURL:string = 'https://www.googleapis.com/books/v1/volumes?q=';
  
  constructor(private http:HttpClient) { }
  
  getBooks(keyword:string) : Observable<Book[]> | void {
    if(keyword=="" || keyword==null){
      return;
    }
    return this.http.get<Book[]>(this.apiURL + keyword);
  }
}
