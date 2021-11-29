import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { pluck, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchbookService {

  constructor(private http: HttpClient) { }

  books$ = new Subject();

  getAll(bookname: string) {

    this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + bookname).pipe(
      pluck('items'),
      map((itemArr: any) => {
        const arr: any = [];
        for (let item of itemArr) {
          const itemDetail : any = {};
          itemDetail['title'] = item.volumeInfo?.title;
          itemDetail['author'] = item.volumeInfo?.authors;
          itemDetail['publisher'] = item.volumeInfo?.publisher;
          itemDetail['publishedDate'] = item.volumeInfo?.publishedDate;
          itemDetail['description'] = item.volumeInfo?.description;
          itemDetail['image'] = item.volumeInfo?.imageLinks?.thumbnail;
          arr.push(itemDetail);
        }
        return arr;
      }),
      tap(myArr => {
        console.log(myArr);
        this.books$.next(myArr);
      })
    ).subscribe();  
  }

  currentList: string[] = [];
  wishList$ = new Subject<string[]>();

  addToList(title: string) {
    let found = false;
    this.currentList.map((s) => {
      if (s === title) {
        found = true;
      }
    });
    if (!found) {
      this.currentList = [...this.currentList, title];
      this.wishList$.next(this.currentList);
    }
  }
  
  deleteFromList(title: string) {
    this.currentList = this.currentList.filter((s) => {
      return s !== title;
    });
    this.wishList$.next(this.currentList);
  }
}
