
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
class Person {
    #name;
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    get name() {
        return this.#name;
    }
    set name(newName) {
        this.#name = newName;
    }
    get abc() {
        return this.#age;
    }
    set abc(newage) {
        this.#age = newage;
    }
    run() {
        console.log(this.#name + ' is running');
        // console.log(this.#name, 'is running');

        // console.log(`${this.#name} is running`);
    }
}
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

// function PersonFn(name, age) {
//     this.name = name;
//     this.age = age;
// }
// PersonFn.prototype.run = function() {
//     console.log(`${this.name} is running`);
// }

// function EmployeeFn(name, age, company) {
//     PersonFn.call(this, name, age);
//     this.company = company;
// }
// EmployeeFn.prototype = PersonFn.prototype;
// EmployeeFn.prototype.constructor = EmployeeFn;
// // Object
// const e = new EmployeeFn('Dio', 200, 'Jump');
// console.log(e);

// // Polymorphism
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
// Array.prototype.myReduce = function (callbackfn) {
//     let value = this[0];
//     for (let i = 1; i < this.length; i++) {
//         value = callbackfn(value, this[i], i, this);
//     }
//     return value;
// }

// const numbers = [175, 50, 25];

// function myFunc(acc, cur) {
//   return acc - cur;
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