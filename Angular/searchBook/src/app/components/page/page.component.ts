import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { VolumeInfo } from 'src/app/interface/volume-info';
import { BookService } from 'src/app/services/book.service';
import { Book } from '../../interface/books';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements AfterViewInit, OnDestroy{

  constructor(private BookService: BookService) { }
  
  private subscription!: Subscription;
  @ViewChild('inputBox') inputBox!: ElementRef;

  ngAfterViewInit(): void {
    let context$ = fromEvent<any>(this.inputBox.nativeElement, 'keyup').pipe(
      debounceTime(400),
      map((event) => event.target.value),
      distinctUntilChanged(),
    );

    this.subscription = context$.subscribe((text) => {
      this.BookService.getAll(text);
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

