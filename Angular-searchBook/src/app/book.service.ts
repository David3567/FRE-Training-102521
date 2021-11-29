import { Injectable } from '@angular/core';
import { books_interface} from './Books_interface';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl:string = 'https://www.googleapis.com/books/v1/volumes?q='
  constructor(private http:HttpClient) { }

  getBooks(keyword:string):Observable<books_interface>|void{
    if(keyword=="" || keyword==null){
      return;
    }
    return this.http.get<books_interface>(this.apiUrl+keyword);
  }
}