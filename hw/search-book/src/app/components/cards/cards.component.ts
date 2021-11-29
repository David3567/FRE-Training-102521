import { Component, OnInit } from '@angular/core';
import { SearchbookService } from 'src/app/shared/service/searchbook.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  books: any = [];
  constructor(private searchbookService: SearchbookService) { 
  }

  addToList(title: string) {
    this.searchbookService.addToList(title);
    console.log(this.searchbookService.wishList$);
  }
  
  ngOnInit(): void {
    this.searchbookService.books$.subscribe(data => {
      this.books = data;
    })
  }
}
