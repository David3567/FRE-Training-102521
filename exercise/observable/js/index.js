console.clear();
var Subscriber = (function () {
    function Subscriber(destination, subscription) {
        var _this = this;
        this.destination = destination;
        this.subscription = subscription;
        this.closed = false;
        subscription.add(function () { return _this.closed = true; });
    }
    Subscriber.prototype.next = function (value) {
        if (!this.closed) {
            this.destination.next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.closed) {
            this.closed = true;
            this.destination.error(err);
            this.subscription.unsubscribe();
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.closed) {
            this.closed = true;
            this.destination.complete();
            this.subscription.unsubscribe();
        }
    };
    return Subscriber;
}());
var Subscription = (function () {
    function Subscription() {
        this.teardowns = [];
    }
    Subscription.prototype.add = function (teardown) {
        this.teardowns.push(teardown);
    };
    Subscription.prototype.unsubscribe = function () {
        for (var _i = 0, _a = this.teardowns; _i < _a.length; _i++) {
            var teardown_1 = _a[_i];
            teardown_1();
        }
        this.teardowns = [];
    };
    return Subscription;
}());
var Observable = (function () {
    function Observable(init) {
        this.init = init;
    }
    Observable.prototype.subscribe = function (observer) {
        var subscription = new Subscription();
        var subscriber = new Subscriber(observer, subscription);
        subscription.add(this.init(subscriber));
        return subscription;
    };
    Observable.prototype.pipe = function () {
        var fns = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fns[_i] = arguments[_i];
        }
        return pipe.apply(void 0, fns)(this);
    };
    return Observable;
}());
var map = function (fn) {
    return function (source) {
        return new Observable(function (subscriber) {
            var subs = source.subscribe({
                next: function (value) {
                    subscriber.next(fn(value));
                },
                error: function (err) {
                    subscriber.error(err);
                },
                complete: function () {
                    subscriber.complete();
                }
            });
            return function () {
                subs.unsubscribe();
            };
        });
    };
};
var myObservable = new Observable(function (observer) {
    var i = 0;
    var id = setInterval(function () {
        observer.next(i++);
        if (i > 3) {
            observer.complete();
            observer.next(999999);
        }
    }, 100);
    return function () {
        console.log('tearing down');
        clearInterval(id);
    };
});
var teardown = myObservable
    .pipe(map(function (x) { return x + 100; }), map(function (x) { return x + '!!!'; }))
    .subscribe({
    next: function (value) { console.log(value); },
    error: function (err) { console.error(err); },
    complete: function () { console.log('done'); }
});
setTimeout(function () {
    teardown.unsubscribe();
}, 2000);
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (source) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, source);
    };
}
//# sourceMappingURL=index.js.map