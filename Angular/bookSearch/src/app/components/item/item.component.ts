import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../Book';
// import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() book:any = null;
  
  constructor(
    
  ) { }

  ngOnInit(): void {
    this.book = this.book.volumeInfo;
  }

}
