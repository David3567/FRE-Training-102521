
// ECMAscript: syntax ES6
// Javascript = ECMAscript + Web.api
// Nodejs = ECMAscript + Node.api

// // Primitive Data
// // sting number boolean undefined null symbol

// var str = 'abc'; 
// console.log(typeof str);
// var copystr = str;
// console.log(typeof copystr);
// console.log('string: typeof instance === ', typeof 'string');
// console.log('number: typeof instance === ', typeof 911);
// console.log('boolean: typeof instance === ', typeof true);
// console.log('undefined: typeof instance === ', typeof undefined); //
// console.log(typeof null); 

// // Object Data
// var arr = [];

// var copyobj = obj;

// var num = 0;
// function foo(n) {
//     n = 6;
//     return n;
// }
// foo(num);
// console.log(num);

// var obj = {
//     name: 'Dio',
//     age: 200
// }
// function bar(obj) {
//     obj.name = 'Jojo';
// }
// bar(obj);
// console.log(obj.name);

// // coercion

// console.log(typeof ('0' - '1'));
// console.log(true + false); 

// var num = 2342342342413;
// // 314...
// var num2 = +(num + '').split('').reverse().join('');
// console.log(typeof num2);

// equality == vs. ===

// console.log(undefined == null);
// console.log(null == false);
// console.log(typeof NaN); 

// console.log(false == NaN);
// console.log(isNaN('apple') === isNaN('banana'));
// console.log(NaN == NaN);

// ----------// var | let | const | function
// hoisting     y      y      y       y
// init      undefined -      -       
// scope     function block block

// function foo() {
//     var num = undefined;

//     if (false) {
//         num = 62;
//     }
//     console.log(num);
// }
// foo();


// oop: Object oriented programming
// encapsulation
// class Person {
//     #name;
//     #age;
//     constructor(name, age) {
//         this.#name = name;
//         this.#age = age;
//     }
//     // get name() {
//     //     return this.#name;
//     // }
//     // set name(newName) {
//     //     this.#name = newName;
//     // }
//     // get abc() {
//     //     return this.#age;
//     // }
//     // set abc(newage) {
//     //     this.#age = newage;
//     // }
//     run() {
//         console.log(this.#name + ' is running');
//         // console.log(this.#name, 'is running');

//         // console.log(`${this.#name} is running`);
//     }
// }
// const p = new Person('Jojo', 18)
// p.abc = 20;
// console.log(p.abc);


// const dio = new PersonFn('Dio', 200);
// // console.log(dio);
// // console.log(dio.__proto__);

// dio.__proto__.run = function() {
//     console.log(`${this.name} is running`);
// }

// dio.run();
// const jojo = new PersonFn('Jojo', 18);
// jojo.run();

// console.log(dio.prototype === dio.__proto__);

// // inheritance


// class Person {
//     // #name;
//     // #age;
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     run() {
//         console.log(this.name + ' is running');
//     }
// }
// class Employee extends Person {

//     constructor(name, age, company = 'Jump') {
//         super(name, age);
//         this.company = 'Jump';
//     }

//     walk() {
//         console.log(this.name + ' is walking');
//     }
// }
// const e = new Employee('Dio', 200);

// console.log(e);
// e.run();

// function PersonFn(name, age) {
//     this.name = name;
//     this.age = age;
// }
// // PersonFn.prototype.run = function() {
// //     console.log(`${this.name} is running`);
// // }

// function EmployeeFn(name, age, company) {
//     PersonFn.apply(this, [name, age]);
//     this.company = company;
// }
// EmployeeFn.prototype = PersonFn.prototype;
// EmployeeFn.prototype.constructor = EmployeeFn;
// // Object
// const e = new EmployeeFn('Dio', 200, 'Jump');
// console.log(e);

// // Poly-morph-ism : Many Forms
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     move() {
//         console.log('move');
//     }

//     walk() {}
// }
// class Fash extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     move() {
//         return console.log(this.name + ' can swim');
//     }
// }
// class Bird extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     move() {
//         return console.log(this.name + ' can fly');
//     }
// }
// class Monkey extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     move() {
//         return console.log(this.name + ' can run');
//     }
// }
// const fish = new Fash('fish');
// const bird = new Bird('bird');
// const monkey = new Monkey('monkey');
// fish.move();
// bird.move();
// monkey.move();

// // // loop 
// const arr = [1, 2, 3, 4, 5, 6];

// Array.prototype.myForEach = function (callbackfn) {
//     for (let i = 0; i < this.length; i++) {
//         callbackfn(this[i], i, this);
//     }
// }
// arr.myForEach(ele => {
//     console.log(ele);
// });
// Array.prototype.myMap = function (callbackfn) {
//     const arr = [];
//     for (let i = 0; i < this.length; i++) {
//         arr.push( callbackfn(this[i], i, this) );
//     }
//     return arr;
// }

// // arr.myForEach();
// Array.prototype.myFilter = function (callbackfn) {
//     const arr = [];
//     for (let i = 0; i < this.length; i++) {
//         if(callbackfn(this[i], i, this)) {
//             arr.push(this[i]);
//         }
//     }
//     return arr;
// }

// const newArrViaFilter = arr.myFilter(function (ele, i, array) {
//     return ele === 5;
// });
// console.log(newArrViaFilter);

// // MyReduce

// Array.prototype.myReduce = function (...args) {
//     // let acc = this[0];
//     // let index = 1;

//     // if (args.length > 1) {
//     //     acc = args[1];
//     //     index = 0;
//     // }
//     // let [ acc, index ] = args.length === 1 ? [ this[0], 1 ] : [ args[1], 0 ];

//     // for (let i = index; i < this.length; i++) {
//     //     acc = args[0](acc, this[i], i, this);
//     // }
//     // return acc;
//     console.log(this);
// }

// const arr =[];
// console.log(arr);




// const numbers = [175, 50, 25];

// function myFunc(acc, cur) {
//     return acc - cur;
// }

// console.log(numbers.myReduce(myFunc));

// const str = 'abc';
// const strarr = str.split(''); // ['a', 'b', 'c'];

// console.log(strarr.myReduce((acc, cur) => acc + cur + cur, '')); // 'aabbcc'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function foo(arr) {
//     const obj = {};

//     for (let ele of arr) {
//         obj[ele.name] = ele.age;
//     }

//     return obj;

//     // return arr.reduce((acc, cur) => ({ ...acc, [cur.name]: cur.age}), {});
// }
// const arr = [
//     { name: 'sam', age: 18 },
//     { name: 'jane', age: 10 },
//     { name: 'john', age: 20 },
//     { name: 'Dio', age: 200 },
// ]
// console.log(foo(arr)); 
// console.log({ sam: 18, jane: 10, john: 20, Dio: 200 });

// arr.myForEach(function (ele, i, array) {
//     array[i] = ele + 1;
// });
// console.log(arr);

// const newarr = arr.myMap(function (ele) {
//     if (ele !== 4)
//         return ele + 2;
// });
// console.log(newarr);

// function print(str) {
//     console.log(str);
// }

// function foo(fn) {
//     fn('test');
// }

// foo(print);

// arr.map(function(ele) {
//     console.log(ele);
// });

// for (let i = 2; i < arr.length; i++) {

//     console.log(arr[i]);
// }

// for (const ele of arr) {
//     console.log(ele);
//     break;
// }

// for (const idx in arr) {
//     console.log(arr[idx]);
// }

// const obj = {
//     name: 'Dio',
//     age: 200
// }

// for (const key in obj) {
//     console.log(key, obj[key]);
// }

// // console.log(obj.name);
// const name = 'name';
// console.log(obj[name]);


// // // // destructure;
// let [a, b] = [0, 1];

// const obj = {
//     name: 'Jojo',
//     age: 18
// }
// let {age, name} = obj;

// const obj = {
//     id: 1,
//     name: 'David Dong',
//     links: [
//         { name: 'wechat',       link: 'wechat.com'      },
//         { name: 'apple',        link: 'apple.com'       },
//         { name: 'cnn',          link: 'cnn.com'         },
//         { name: 'fox',          link: 'fox.com'         },
//         { name: 'hbo',          link: 'hbo.com'         },
//     ]
// }
// console.log(obj.links.find( ({name})=> name === 'apple').link);

// // // // rest parameter vs. spread operator
// const arr = [1, 2, 3];
// const arr1 = [0, ...arr, 456];

// const obj = {
//     name: 'Jojo',
//     age: 18
// }
// const obj1 = {...obj};

// const str = 'testtestabc';

// const set = new Set([...str]);
// console.log([...set].join(''));

// function foo(num, num1, ...args) {
//     console.log(args);
// }
// foo(1, 2, 1, 12, 123);

// // // // object copy
// // deep coyp vs shallow copy
// const newobj = {name: 'test'}

// const obj = {
//     name: 'Jojo',
//     age: 18,
//     links: [
//         'show', 1, 2, newobj
//     ],
//     foo: function() {
//         console.log(5);
//     },
//     date: new Date()
// }
// obj.foo();

// // JSON.parse and JSON.stringify
// const obj1 = JSON.parse(JSON.stringify(obj));
// console.log(obj, obj1);

// deep copy: Lodash | _.cloneDeep() Method


// // // // iife

// (
//     function() {
//     return console.log(5)
//     }
// )();

// (   
//     function() {
//         return console.log(5)
//     }()    
// );

// const bar = foo();
// const baz = foo();

// // // // closure

// const foo = () => {
// // ~~~~~~~~~~~~~~~~~~
//     function print(num) {
//         console.log(num);
//     }
// // ~~~~~~~~~~~~~~~~~~
//     return function(b) {
//         print(b);
//     }
// }

// const bar = foo();
// bar(5); // sum

// /**
//  * 
//  * @param {number} num 
//  * @param {function} cb 
//  */

// const target = (a, b) => console.log(a + b);
// const fn = limitedFunction(2, target);

// function limitedFunction(num, cb) { 

//     return function(...args) {
//         if (num > 0) {
//             num--;
//             return cb(...args);
//         } else {
//             console.log('overlimited');
//         }
//     }
// }

// fn(4, 5); // 9
// fn(1, 2); // 3
// fn(3, 12); // 15
// fn(4, 2); // 6
// fn(3, 12); // 15


// // // // this
// (function() {
//     console.log(this);
// })();

// const myObj = {
//     name: 'Dio',
//     age: 200,

//     foo: function() {
//         // console.log(this); // this --> myObj

//         // (function bar() {
//         //     console.log('function: bar: ', this); // this --> global obj
//         // }).call(this); // this ---> myObj

//         const baz = function() {
//             console.log('function: baz: ', this); // this --> global obj
//         }
//         const newbaz = baz.bind(this); // this ---> myObj
//         newbaz();

//         const bar = () => {
//             console.log('function: bar: ', this); // this --> myObj
//         }
//         bar();

//     }
// }
// myObj.foo();

// class Person {
//     constructor(name) {
//         this.name = name; 
//     }
//     showThis() {
//         console.log(this);
//     }
//     static staticShowThis() {
//         console.log(this);
//     }
// }
// const p = new Person('Jojo');

// p.showThis();

// Person.staticShowThis();

// // // // call, apply, bind
const obj = {
    pi: 3.1415926,
    getPi() {
        return this.pi;
    }
}
function getArea(num0, num1, num2) { // 100 args
    console.log(this.getPi(), num0, num1, num2);
}

[].map()
// // // bind
// const newGetArea = getArea.bind(obj); // lazyloading
// newGetArea(1, 2, 3);

// // call, apply
// getArea.call(obj, 1, 2, 3);// eagerloading // 101 args
const checkapplyreturn = getArea.apply(obj, [1, 2, 3]);// eagerloading // 2 args: target obj, arr.length === 100
console.log('check the returned: ', checkapplyreturn);
// // // // ES6: arrow funciton, class, let, const, Promise / async await

// function bar() {
//     console.log(arguments);
// }

// console.log(bar());

// // // // currying
// const callback1 = (a) => a + 2; // 5
// const callback2 = (b) => b * 2; // 20
// const callback3 = (c) => c / 2; // 2

// console.log(runAll(callback1, callback2, callback3)(5)); // 2

// function runAll(...args) {
//     return function(num) {
//         // return args.reduce((acc, cb) => cb(acc), num);
//         let result = num;
//         for(let i in args){
//             result = args[i](result);
//         }
//         return result;
//     }
// }

// const arr = [1, 2, 3];
// const bar = (num) => {

//     return  (ele) => {
//         console.log(ele + num);
//     }
// }
// arr.forEach(bar(12));

// // // // event loop

// for (var i = 0; i < 5; i++) {
//     (function(v) {
//         setTimeout(() => console.log(v), (5 - v) * 1000);
//     })(i);

//     console.log('test ' + i);
// }

// call stack: () => console.log(i) 
/**
 * async api, web api: 
 * () => console.log(0), 3 
 * () => console.log(1), 2
 * () => console.log(2), 1 
 * () => console.log(3), 0
 * () => console.log(4), 0 
 * ...
 */
/**
 * tasks queue, message queue:
 * [() => console.log(i)]
 */

// 0, 1, 2, 3, 4
// 5, 5, 5, 5, 5

// ~~~~~~interview question~~~~~~~~~~~~
// const first = [
//     { userid: 2, name: 'Velen' },
//     { userid: 56, name: 'Illidan' },
//     { userid: 23, name: 'Muradin' },
//     { userid: 12, name: 'Sylvanas' },
//     { userid: 44, name: 'Cenarius' },
//     { userid: 4, name: 'Gul\'Dan' }
// ];
// const second = [
//     { userid: 2, role: 'Mage' },
//     { userid: 4, role: 'Worlock' },
//     { userid: 56, role: 'Demon Hunter' },
//     { userid: 66, role: 'Druid' },
//     { userid: 87, role: 'Shaman' },
//     { userid: 12, role: 'Hunter' },
// ];

// function solution(firstarr, secondarr) {
//     const arr = [...firstarr, ...secondarr];
//     const map = {};
//     /**
//      * 2: { userid: 2, name: 'Velen', role: null },
//      */
//     arr.forEach(ele => {
//         map[ele.userid] = {
//             ...{ userid: null, name: null, role: null },
//             ...map[ele.userid],
//             ...ele
//         };
//     });
//     return Object.values(map);
// }

// console.log(solution(first, second));

// const obj = {
//     name: 'Dio'
// }

// obj.age = 200;

// ~~~~~~~~~~~~~~~ JS Day4 HW ~~~~~~~~~~~~~~~
// const state = {
//     a: "apple",
//     b: "banana",
//     c: "city",
//     d: "dom",
//     e: "end",
//     f: "forEach"
// };

// // // // callback function & Callback Hell;
// const foo = () => console.log('foo');

// const getRendomTime = () => Math.floor(Math.random() * 6);

// const callFunInRendomTime = (callback) => {
//     const time = getRendomTime();
//     console.log(`${time}s`);

//     setTimeout(callback, time * 1000);
// }

// callFunInRendomTime(() => {
//     callFunInRendomTime(() => {
//         callFunInRendomTime(() => {
//             callFunInRendomTime(() => {
//                 callFunInRendomTime(() => {
//                     console.log('stop');
//                     callFunInRendomTime(() => {
//                         callFunInRendomTime(() => {
//                             callFunInRendomTime(() => {
//                                 callFunInRendomTime(foo)
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });

// // XHR: 

// const getTodoFormJsonPlaceHolder = (id) => {

//     return new Promise((resolve, reject) => {
//         const xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status == 200) {
//                 // Typical action to be performed when the document is ready:
//                 resolve(JSON.parse(xhttp.response));
//             }
//         };
//         xhttp.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
//         xhttp.send();
//     });
// }

// // const print = (ele) => {
// //     console.log(ele);
// // }

// getTodoFormJsonPlaceHolder(4)
//     .then(data => {
//         print(data);
//         return getTodoFormJsonPlaceHolder(15);
//     })
//     .then(data => {
//         print(data);
//         return getTodoFormJsonPlaceHolder(78);
//     })
//     .then(data => {
//         print(data);
//     });

// (async () => {
//     const gettodo4 = await getTodoFormJsonPlaceHolder(4);
//     print(gettodo4);
//     const gettodo15 = await getTodoFormJsonPlaceHolder(15).then(data => {
//         print(data);
//     });
//     const gettodo78 = await getTodoFormJsonPlaceHolder(78);
//     print(gettodo78);
// })();

// 4,  15, 78
// getTodoFormJsonPlaceHolder(4, print);
// getTodoFormJsonPlaceHolder(15, print);
// getTodoFormJsonPlaceHolder(78, print);

// getTodoFormJsonPlaceHolder((data) => {
//     print(data);
//     getTodoFormJsonPlaceHolder((data) => {
//         print(data);
//         getTodoFormJsonPlaceHolder((data) => {
//             print(data);
//         }, 78);
//     }, 15);
// }, 4);

// [1, 2, 3]
// push(4) -> [1, 2, 3, 4]
// pop() -> [1, 2, 3]
// shift() -> [2, 3];
// unshift(4) -> [4, 2, 3]
// // // // Promise && MyPromise
// class MyPromise {
//     thencallbackqueue = [];
//     catchcallbackqueue = [];
//     currentData = undefined;
//     promiseState = 'pending';

//     constructor(executor) {
//         try {
//             executor(this.resolve.bind(this), this.reject);
//         } catch (error) {
//             this.reject(error);
//         }
//     }
//     resolve(resdata) {
//         setTimeout(() => {
//             try {
//                 this.promiseState = 'fulfilled';

//                 this.currentData = resdata;
//                 while (this.thencallbackqueue.length) {
//                     const cb = this.thencallbackqueue.shift();

//                     if (this.currentData instanceof MyPromise) {
//                         this.currentData.then(data => {
//                             this.currentData = cb(data);
//                         });
//                     } else {
//                         this.currentData = cb(this.currentData);
//                     }
//                 }
//             } catch (error) {
//                 this.reject(error);
//             }
//         });
//     }
//     reject = (rejdata) => {
//         this.promiseState = 'rejected';
//         setTimeout(() => {
//             const cb = this.catchcallbackqueue.shift();
//             if (cb) {
//                 cb(rejdata);
//             } else {
//                 console.log(rejdata);
//             }
//         }, 0);
//     }
//     then(thencbfn) {
//         if (this.promiseState === 'pending') {
//             this.thencallbackqueue.push(thencbfn);
//         }
//         return this;
//     }
//     catch(catchcbfn) {
//         this.catchcallbackqueue.push(catchcbfn);
//         return this;
//     }
//     finally(finalfn) {
//         finalfn();
//         return this;
//     }
//     static resolve(resdata) {
//         return new MyPromise((res, _) => {
//             res(resdata);
//         });
//     }
//     static reject(rejdata) {
//         return new MyPromise((_, rej) => {
//             rej(rejdata);
//         });
//     }
//     static all(promisearr) {
//         const resolveArr = new Array(promisearr.length);
//         let counter = 0;

//         return new MyPromise((res, rej) => {
//             promisearr.forEach((ele, i) => {
//                 if (ele instanceof MyPromise) {
//                     ele.then(data => {
//                         counter++;
//                         resolveArr[i] = data;
//                         if (counter === resolveArr.length) {
//                             res(resolveArr);
//                         }
//                     });
//                 } else {
//                     counter++;
//                     resolveArr[i] = ele;
//                     if (counter === resolveArr.length) {
//                         res(resolveArr);
//                     }
//                 }
//             });
//         });
//     }
//     static race(promisearr) {
//         const arr = [...promisearr];

//         return new MyPromise((res, rej) => {
//             for (let i = 0; i < arr.length; i++) {
//                 arr[i].then(data => {
//                     res(data);
//                 });
//             }
//         });
//     }
// }

// const promise1 = new MyPromise((resolve, reject) => {
//     setTimeout(resolve, 500, 'one');
//   });

//   const promise2 = new MyPromise((resolve, reject) => {
//     setTimeout(resolve, 100, 'two');
//   });

//   MyPromise.race([promise1, promise2]).then((value) => {
//     console.log(value);
//     // Both resolve, but promise2 is faster
//   });
//   // expected output: "two"

// const promise1 = MyPromise.resolve(3);
// const promise2 = 42;
// const promise3 = new MyPromise((resolve, reject) => {
//     // resolve('foo');
//     setTimeout(resolve, 100, 'foo');
// });

// MyPromise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
// });

// // expected output: Array [3, 42, "foo"]
// [3, 42, 'foo']

// const getRendomTime = () => Math.floor(Math.random() * 6);

// new Promise((resolve, reject) => {
//     const timer = getRendomTime();
//     console.log(`${timer}s`);
//     if (timer < 3) {
//         resolve('test');
//     } else {
//         reject('err');
//     }
// })
//     .then((data) => {
//         console.log('then: ', data);
//         return 1;
//     })
//     .then((data) => {
//         console.log('then: ', data);
//         return 1;
//     })
//     .catch((err) => {
//         console.log('catch: ', err);
//     })
//     .finally(() => console.log('closed!'))




// console.log(promise);

// // // // MyFetch
// const myFetch = (url, options) => {
//     let method = options && options.method
//         ? options.method
//         : 'GET';

//     return new Promise((resolve, reject) => {
//         const xhttp = new XMLHttpRequest();
//         xhttp.open(method, url);

//         if (options && options.headers) {
//             Object.keys(options.headers).forEach(key => {
//                 xhttp.setRequestHeader(key, options.headers[key]);
//             });
//         }

//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status >= 200 && this.status < 300) {
//                 console.log(this.status);
//                 resolve({
//                     json() {
//                         return JSON.parse(xhttp.response);
//                     }
//                 }); 
//             } else if (this.status < 200 && this.status >= 300) {
//                 reject({ errorStatus: this.status});
//             }
//         };

//         options && options.body 
//             ? xhttp.send(options.body)
//             : xhttp.send();
//     });
// }
// // get
// myFetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// // post
// myFetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// // put
// myFetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//         id: 1,
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// // // patch
// myFetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PATCH',
//     body: JSON.stringify({
//         title: 'foo',
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// // delete
// myFetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'DELETE',
// });


// ~~~~~~~~~~~~~~~~~~~ interview question ~~~~~~~~~~~~~~~~~~~
// For example:
// If,
// const add = (a, b) => a + b
// const multiplyByTwo = (c) => c * 2
// Then,
// await promisifyFunction(add)(1, 1) should return 2
// await promisifyFunction(multiplyByTwo)(3).then(val => val + 1) should return 7

// function promisifyFunction(callback) {
//     return function (...args) {
//         const data = callback(...args);
//         return new Promise((res, rej) => {
//             res(data);
//         })
//     }
// }
// const add = (a, b) => a + b;
// const multiplyByTwo = (c) => c * 2;

// (async () => {
//     try {
//         const a = await promisifyFunction(add)(1, 1);
//         const b = await promisifyFunction(multiplyByTwo)(3).then(val => val + 1);
//         console.log(a, b);
//     } catch (error) {

//     }
// })();

// const arr = [1, 2, 3, 4, 0, 2, 1, 4, 1];
// console.log(arr.indexOf(Math.min(...arr)));
