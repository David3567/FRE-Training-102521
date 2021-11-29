import { Component, OnInit } from '@angular/core';
import { SearchbookService } from 'src/app/shared/service/searchbook.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private searchBookService: SearchbookService) { }    

  wishList: string[] = [];

  ngOnInit(): void {
    this.searchBookService.wishList$.subscribe((newList: string[]) => {
      this.wishList = newList;
    })
  }

  delete(title: string) {
    this.searchBookService.deleteFromList(title);
  }

}
