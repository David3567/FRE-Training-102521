console.clear();



interface Observer<T> {
  next(value: T): void;
  error(err: any): void;
  complete(): void;
}

type Teardown = () => void;

class Subscriber<T> implements Observer<T> {
  closed = false;

  constructor(
    private destination: Observer<T>, 
    private subscription: Subscription) {
      subscription.add(() => this.closed = true);
  }

  next(value: T) {
    if (!this.closed) {
      this.destination.next(value);
    }
  }

  error(err: any) {
    if (!this.closed) {
      this.closed = true;
      this.destination.error(err);
      this.subscription.unsubscribe();
    }
  }

  complete() {
    if (!this.closed) {
      this.closed = true;
      this.destination.complete();
      this.subscription.unsubscribe();
    }
  }
}

class Subscription {
  private teardowns: Teardown[] = [];

  add(teardown: Teardown) {
    this.teardowns.push(teardown);
  }

  unsubscribe() {
    for (const teardown of this.teardowns) {
      teardown();
    }
    this.teardowns = [];
  }
}

class Observable<T> {
  constructor(private init: (observer: Observer<T>) => Teardown) {}

  subscribe(observer: Observer<T>): Subscription {
    const subscription = new Subscription();
    const subscriber = new Subscriber(observer, subscription);
    subscription.add(this.init(subscriber));

    return subscription; 
  }

  pipe<R>(...fns: Array<(source: Observable<any>) => Observable<any>>): Observable<R> {
    return pipe(...fns)(this);
  }
}

const map = <T, R>(fn: (value: T) => R) => 
(source: Observable<T>) => {
    return new Observable<R>(subscriber => {
      const subs = source.subscribe({
        next(value: T) {
          subscriber.next(fn(value));
        },
        error(err: any) { 
          subscriber.error(err);
        },
        complete() { 
          subscriber.complete();
        },
      })
      return () => {
        subs.unsubscribe();
      }
    })
  }

const myObservable = new Observable((observer: Observer<number>) => {
  let i = 0;
  const id = setInterval(() => {
    observer.next(i++);
    if (i > 3) {
      observer.complete();
      observer.next(999999);
    }
  }, 100);

  return () => {
    console.log('tearing down');
    clearInterval(id);
  }
})


const teardown = myObservable
.pipe(map(x => x + 100), map(x => x + '!!!'))
.subscribe({
  next(value) { console.log(value); },
  error(err) { console.error(err); },
  complete() { console.log('done'); },
});

setTimeout(() => {
  teardown.unsubscribe();
},2000);


function pipe(...fns: Array<(source: Observable<any>) => Observable<any>>) {
  return (source: Observable<any>) =>
    fns.reduce((prev, fn) => fn(prev), source);
}