import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Book } from '../interface/Book';
import { pluck, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiURL:string = 'https://www.googleapis.com/books/v1/volumes?q=';
  
  constructor(private http:HttpClient) { }
  
  getBooks(keyword:string) : Observable<any> | void {

    if (keyword !== null) {
      return this.http
      .get<Book>(this.apiURL + keyword)
      .pipe(pluck('items')
      )
                        
    }
  
 
  //   return this.http.get<Book[]>(this.apiURL + keyword);
  // }

  }
}
