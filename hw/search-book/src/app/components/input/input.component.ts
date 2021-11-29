import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, OnDestroy} from '@angular/core';
import { debounceTime, Subscription, fromEvent, map, distinctUntilChanged } from 'rxjs';
import { SearchbookService } from 'src/app/shared/service/searchbook.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements AfterViewInit, OnDestroy {

  constructor(private searchBookService : SearchbookService) { }

  @ViewChild('inputBox') inputBox!: ElementRef;

  private subscription!: Subscription;

  ngAfterViewInit(): void {
    let context$ = fromEvent<any>(this.inputBox.nativeElement, 'keyup').pipe(
      debounceTime(1000),
      map((event) => event.target.value),
      distinctUntilChanged(),
    );

    this.subscription = context$.subscribe((text) => {
      this.searchBookService.getAll(text);
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
