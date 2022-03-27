var arr = [true, "test"];
arr.push(true);
var Subscriber = (function () {
    function Subscriber(obs, sbp) {
        var _this = this;
        this.obs = obs;
        this.sbp = sbp;
        this.close = false;
        this.next = function (value) {
            if (!_this.close) {
                _this.obs.next(value);
            }
        };
        this.error = function (err) {
            if (!_this.close) {
                _this.obs.error(err);
            }
            _this.sbp.unsubscribe();
        };
        this.complete = function () {
            if (!_this.close) {
                _this.obs.complete();
            }
            _this.sbp.unsubscribe();
        };
        this.sbp.add(function () { return (_this.close = true); });
    }
    return Subscriber;
}());
var Subscription = (function () {
    function Subscription() {
        var _this = this;
        this.turnoffs = [];
        this.add = function (turnoff) {
            _this.turnoffs.push(turnoff);
        };
        this.unsubscribe = function () {
            _this.turnoffs.forEach(function (ele) { return ele(); });
            _this.turnoffs = [];
        };
    }
    return Subscription;
}());
var Observable = (function () {
    function Observable(init) {
        var _this = this;
        this.init = init;
        this.subscribe = function (obs) {
            var subscription = new Subscription();
            var subs = new Subscriber(obs, subscription);
            subscription.add(_this.init(subs));
            return subscription;
        };
    }
    Observable.prototype.pipe = function () {
        var fns = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fns[_i] = arguments[_i];
        }
        return pipe.apply(void 0, fns)(this);
    };
    return Observable;
}());
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (source) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, source);
    };
}
function map(cbfn) {
    return function (source) {
        return new Observable(function (obs) {
            var sbp = source.subscribe({
                next: function (val) {
                    obs.next(cbfn(val));
                },
                error: function (err) {
                    obs.error(err);
                },
                complete: function () {
                    obs.complete();
                }
            });
            return function () {
                sbp.unsubscribe();
            };
        });
    };
}
var Subject = (function () {
    function Subject() {
        var _this = this;
        this.subscribers = [];
        this.subscription = new Subscription();
        this.next = function (value) {
            _this.subscribers.forEach(function (subr) {
                subr.next(value);
            });
        };
        this.error = function (err) {
            _this.subscribers.forEach(function (subr) {
                subr.error(err);
            });
            _this.subscription.unsubscribe();
        };
        this.complete = function () {
            _this.subscribers.forEach(function (subr) {
                subr.complete();
            });
            _this.subscription.unsubscribe();
        };
    }
    Subject.prototype.subscribe = function (suber) {
        var _this = this;
        this.subscribers.push(suber);
        this.subscription.add(function () {
            var index = _this.subscribers.indexOf(suber);
            _this.subscribers.splice(index, 1);
        });
        return this.subscription;
    };
    return Subject;
}());
//# sourceMappingURL=index.js.map