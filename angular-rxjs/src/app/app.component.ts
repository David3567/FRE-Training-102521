import { Component, OnInit, ViewChild, ElementRef, Pipe } from '@angular/core';
import { from, fromEvent, Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular and Rxjs';
  data: string = '';

  longstring =
    'Example. The following is an Observable that pushes the values 1, 2, 3 immediately (synchronously) when subscribed, and the value 4 after one second has passed since the subscribe call, then completes:';
  controlstr = true;

  myobservable$: any;

  @ViewChild('input', { static: true }) input!: ElementRef;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.myobservable$ = new Observable((observer) => {
    //   observer.next(1);
    //   observer.next(2);
    //   observer.next(3);
    //   observer.next(4);
    //   observer.next(5);
    //   observer.complete();
    // });
    // this.myobservable$ = of([1, 2, 3, 4, 5], [], []);
    this.myobservable$ = from([1, 2, 3, 4, 5]); // [2, 3, 4, 5, 6]; map

    // this.myobservable$
    //   .pipe(
    //     tap((num) => {
    //       console.log('tap: ', num);
    //     }),
    //     filter((num: number) => num > 3),
    //     tap((num) => {
    //       console.log('tap: ', num);
    //     }),
    //     map((num: number) => num + 1),
    //     tap((num) => {
    //       console.log('tap: ', num);
    //     })
    //   )
    //   .subscribe((num: number) => console.log(num));

    // this.myobservable$ = fromEvent(this.input.nativeElement, 'keyup').pipe(
    //   tap(_ => {

    //     this.http.post(url, this.data);
    //   })
    // );
  }
  toggle() {
    this.controlstr = !this.controlstr;
    console.log(this.controlstr);
  }
}
