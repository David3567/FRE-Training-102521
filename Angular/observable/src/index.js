console.clear();
var Subscriber = /** @class */ (function () {
    function Subscriber(destination, subscription) {
        var _this = this;
        this.destination = destination;
        this.subscription = subscription;
        this.closed = false;
        subscription.add(function () { return (_this.closed = true); });
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
var Subscription = /** @class */ (function () {
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
var Observable = /** @class */ (function () {
    function Observable(init) {
        this.init = init;
    }
    Observable.prototype.subscribe = function (observer) {
        var subscription = new Subscription();
        var subscriber = new Subscriber(observer, subscription);
        subscription.add(this.init(subscriber));
        return subscription;
    };
    Observable.prototype.map = function (fn) {
        var _this = this;
        return new Observable(function (subscriber) {
            _this.subscribe({
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
            return function () { };
        });
    };
    return Observable;
}());
var myObservable = new Observable(function (observer) {
    var i = 0;
    var id = setInterval(function () {
        observer.next(i++);
        if (i > 3) {
            observer.complete();
            observer.next(9999999);
        }
    }, 100);
    return function () {
        console.log('tearing down');
        clearInterval(id);
    };
});
var teardown = myObservable
    .map(function (x) { return x + 100; })
    .subscribe({
    next: function (value) {
        console.log(value);
    },
    error: function (err) {
        console.log(err);
    },
    complete: function () {
        console.log('done');
    }
});
setTimeout(function () {
    teardown.unsubscribe();
}, 2000);
