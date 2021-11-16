var MyQueue = (function () {
    function MyQueue(queue) {
        this.queue = queue;
    }
    MyQueue.prototype.enqueue = function (item) {
        this.queue.push(item);
    };
    MyQueue.prototype.dequeue = function () {
        throw new Error("Method not implemented.");
    };
    MyQueue.prototype.getqueue = function () {
        return this.queue;
    };
    return MyQueue;
}());
var myqueue1 = new MyQueue([]);
myqueue1.enqueue(4);
console.log(myqueue1.getqueue());
//# sourceMappingURL=index.js.map