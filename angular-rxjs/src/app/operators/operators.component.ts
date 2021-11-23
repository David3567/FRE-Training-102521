import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  forkJoin,
  fromEvent,
  interval,
  Observable,
  Subject,
  Subscription,
} from 'rxjs';
import {
  concatMap,
  exhaustMap,
  map,
  mergeMap,
  switchMap,
  takeUntil,
} from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss'],
})
export class OperatorsComponent implements OnInit {
  count = 0;
  notifier = new Subject();
  obs$ = interval(500).pipe(takeUntil(this.notifier));
  clicks$: Observable<any> = new Observable();
  val = 0;

  @ViewChild('button', { static: true }) button?: ElementRef;

  @ViewChild('one', { static: true }) btnone?: ElementRef;
  @ViewChild('two', { static: true }) btntwo?: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // this.clicks$ = fromEvent(this.button?.nativeElement, 'click');
    // this.advMapExample1();

    const btnoneevent$ = fromEvent(this.btnone?.nativeElement, 'click').pipe(
      map((_) => this.btnone?.nativeElement.id)
    );
    const btntwoevent$ = fromEvent(this.btntwo?.nativeElement, 'click').pipe(
      map((_) => this.btntwo?.nativeElement.id)
    );

    forkJoin({
      foo: btnoneevent$,
      bar: btntwoevent$,
    }).subscribe((data) => console.log(data));
  }

  // advMapExample1() {
  //   this.clicks$
  //     .pipe(
  //       exhaustMap(() => {
  //         // <------- change the map
  //         this.count = this.count + 1;
  //         return this.delayedObs(this.count);
  //       })
  //     )
  //     .subscribe((val) => console.log(val));
  // }

  // delayedObs(count: number) {
  //   return new Observable((observer) => {
  //     const timer = 500;
  //     const arr = ['A', 'B', 'C', 'D'];
  //     for (let i = 0; i < 4; i++) {
  //       setTimeout(() => {
  //         observer.next(`${count} ${arr[i]}`); // 1 A, 1 B, 1 C ...
  //         // 2 A 2 B 2C ...
  //       }, (i + 1) * timer);
  //     }
  //     setTimeout(() => {
  //       observer.next(count + ' E');
  //       observer.complete();
  //     }, 5 * timer);
  //   });
  // }

  // start() {
  //   this.obs$.subscribe((val) => console.log(val));
  // }
  // stop() {
  //   this.notifier.next();
  //   this.notifier.complete();
  // }
}
