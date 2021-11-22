interface Observer<T> {
    next: (value: T) => void;
    error: (err: any) => void;
    complete: () => void;
}

class Subscriber<T> implements Observer<T> {
    private close = false;

    constructor(private obs: Observer<T>, private sbp: Subscription) {
        this.sbp.add(() => (this.close = true));
    }

    next = (value: T) => {
        if (!this.close) {
            this.obs.next(value);
        }
    };
    error = (err: any) => {
        if (!this.close) {
            this.obs.error(err);
        }
        this.sbp.unsubscribe();
        // this.close = true;
    };
    complete = () => {
        if (!this.close) {
            this.obs.complete();
        }
        this.sbp.unsubscribe();
        // this.close = true;
    };
}

class Subscription {
    private turnoffs: TurnOff[] = [];

    add = (turnoff: TurnOff) => {
        this.turnoffs.push(turnoff);
    };

    unsubscribe = () => {
        this.turnoffs.forEach((ele) => ele());
        this.turnoffs = [];
    };
}

type TurnOff = () => any;

class Observable<T> {
    constructor(private init: (obs: Observer<T>) => TurnOff) {}

    subscribe = (obs: Observer<T>) => {
        const subscription = new Subscription();
        const subs = new Subscriber(obs, subscription);
        subscription.add(this.init(subs));

        return subscription;
    };

    // pipe<R>(fn: (source: Observable<T>) => Observable<R>): Observable<R> {
    //     return new Observable<R>((s) => {
    //         const sbp = fn(this).subscribe(s);
    //         return () => {
    //             sbp.unsubscribe();
    //         };
    //     });
    // }

    pipe<R>(
        ...fns: Array<(source: Observable<any>) => Observable<any>>
    ): Observable<R> {
        return pipe(...fns)(this);
    }
}

function pipe<R>(...fns: Array<(source: Observable<any>) => Observable<any>>) {
    return (source: Observable<any>) => {
        return fns.reduce((prev, fn) => fn(prev), source);
    };
}

function map<T, R>(cbfn: (value: T) => R) {
    return (source: Observable<T>) => {
        return new Observable<R>((obs) => {
            const sbp = source.subscribe({
                next: (val: T) => {
                    obs.next(cbfn(val));
                },
                error: (err: any) => {
                    obs.error(err);
                },
                complete: () => {
                    obs.complete();
                },
            });

            return () => {
                sbp.unsubscribe();
            };
        });
    };
}

// // const observable = new Observable((obs) => {
// //     let i = 0;

// //     const interval = setInterval(() => {
// //         obs.next(i++);

// //         if (i > 5) {
// //             obs.complete();
// //             obs.next(999999999);
// //         }
// //     }, 300);

// //     return () => {
// //         clearInterval(interval);
// //     };
// // }).pipe(
// //     map((ele: number) => ele * 2),
// //     map((ele: number) => ele + 2)
// // );

// // const sbp = observable.subscribe({
// //     next: (value) => console.log(value),
// //     error: (err) => console.log(err),
// //     complete: () => console.log("completed"),
// // });

// // setTimeout(() => sbp.unsubscribe(), 3200);

// // const observable = (obs: Observer<number>) => {
// //     let i = 0;

// //     const interval = setInterval(() => {
// //         obs.next(i++);

// //         if (i > 5) {
// //             obs.complete();
// //         }
// //     }, 300);

// //     return () => {
// //         clearInterval(interval);
// //     };
// // };

// // const sbp = observable({
// //     next: (value) => console.log(value),
// //     error: (err) => console.log(err),
// //     complete: () => console.log("completed"),
// // });

// // setTimeout(() => sbp(), 3200);

class Subject<T> {
    subscribers: Observer<T>[] = [];
    subscription: Subscription = new Subscription();

    next = (value: T) => {
        this.subscribers.forEach((subr: Observer<T>) => {
            subr.next(value);
        });
    };
    error = (err: any) => {
        this.subscribers.forEach((subr: Observer<T>) => {
            subr.error(err);
        });
        this.subscription.unsubscribe();
    };
    complete = () => {
        this.subscribers.forEach((subr: Observer<T>) => {
            subr.complete();
        });
        this.subscription.unsubscribe();
    };

    subscribe(suber: Observer<T>) {
        this.subscribers.push(suber);

        this.subscription.add(() => {
            const index = this.subscribers.indexOf(suber);
            this.subscribers.splice(index, 1);
        });

        return this.subscription;
    }
}

// const mySubject = new Subject<string>();

// // 1
// const sub1 = mySubject.subscribe({
//     next: (val) => console.log("sub1: ", val),
//     error: (err) => console.log(err),
//     complete: () => console.log("sub1, completed"),
// });

// // 3
// mySubject.next("message 1!");

// // 2
// const sub2 = mySubject.subscribe({
//     next: (val) => console.log("sub2: ", val),
//     error: (err) => console.log(err),
//     complete: () => console.log("sub2, completed"),
// });

// mySubject.next("message 2!");

// // sub2.unsubscribe();

// // 5
// mySubject.next("message 3!");

// // mySubject.error("error occurs!");

// // sub1.unsubscribe();

// mySubject.next("message 4!");

// mySubject.next("message 5!");

// mySubject.next("message 6!");

// mySubject.next("message 7!");
