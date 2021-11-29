import { Component, OnInit } from '@angular/core';
import { SearchbookService } from 'src/app/shared/service/searchbook.service';

@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.css']
})
export class ShowlistComponent implements OnInit {

  toolBar = [
    { name: 'Home', dest: 'src/app/app.component.html'},
    { name: 'Show Wishlist', dest: '#'}
  ];

  constructor(private searchBookService: SearchbookService) { }    

  wishList: string[] = [];

  ngOnInit(): void {
    this.searchBookService.wishList$.subscribe((newList: string[]) => {
      this.wishList = newList;
    })
  }


}
