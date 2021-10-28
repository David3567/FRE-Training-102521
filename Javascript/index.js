
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
//     get name() {
//         return this.#name;
//     }
//     set name(newName) {
//         this.#name = newName;
//     }
//     run() {
//         console.log(this.#name + ' is running');
//         console.log(this.#name, 'is running');

//         console.log(`${this.#name} is running`);
//     }
// }

// function PersonFn(name, age) {
//     this.name = name;
//     this.age = age;
// }
// PersonFn.prototype.run = function() {
//     console.log(`${this.name} is running`);
// }
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

const foo = function bar() {

}

console.log(foo.name);
