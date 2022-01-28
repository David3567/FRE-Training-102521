// let a: number = 10;
// let b: string = "10";
// let c: boolean = true;
// let d: number[] = [12, 1, 24, 1];
// let e: [number, string, boolean] = [1, "2", false];
// let f: null = null;
// let g: undefined = undefined;

// // any
// let h: any = 0;
// h = true;

// let str: string = "abc";
// let val: any = 0;

// str = val;

// // // unknown
// let h: unknown = "test";

// if (typeof h === "string") {
//     str = h;
// }
// console.log(str);

// // function

// type Fntype = (num: number, str: string) => string;
// type PersonType = { name: string; age: number };

// interface FnInterface {
//     (num: number, str: string): string;
// }

// let foo: (num: number, str: string) => string = function (num, str) {
//     console.log(str);
//     return num + str;
// };

// let foo: FnInterface = function (num, str) {
//     console.log(str);
//     return num + str;
// };

// let foo: Fntype = function (num, str) {
//     console.log(str);
//     return num + str;
// };

// function foo(num?: number, str: string = "test"): string {
//     console.log(str);
//     return num + str;
// }

// // interface vs. class
// interface PersonInterface {
//     name: string;
//     age: number;
// }
// class PersonClass {
//     name: string;
//     age: number;
// }
// let obj: PersonClass = {
//     name: "Dio",
//     age: 200
// }
// // interface vs. type
// interface SetName {
//     name: string;
// }
// type SetNameType = {name: string};

// interface SetNameAndAge extends SetName {
//     age: number;
// }
// type SetNameAndAgeType = SetNameType & {age: number};

// let obj: SetNameAndAgeType = {
//     name: 'Jojo',
//     age: 18
// }

// // implements interface
// interface Radio {
//     openRadio(): void;
// }
// interface Battery {
//     batteryStatus: () => void;
// }

// class Mobild implements Radio, Battery {
//     batteryStatus: () => void;

//     openRadio(): void {
//     }
// }

// // callback function
// type myType = (num: number) => number;

// let myFn: myType = function(num) {
//     return num;
// }

// function foo(cb: myFn): never {
//     // throw Error;
//     while(true) {}
// }
// function foo(num1: number, cb: myType): number {
//     return cb(num1);
// }

// foo(5, myFn);

// // enum
// enum Role {
//     user,
//     superuser,
//     admin = 19,
//     superadmin,
//     W = "winter",
//     S = "summer",
// }
// console.log(Role);

// enum PrintMedia {
//     Newspaper = 6,
//     Newsletter,
//     Magazine,
//     Book,
// }
// // console.log(PrintMedia[6]);

// function getMedia(mediaName: string): PrintMedia {
//     if (mediaName === "Forbes" || mediaName === "Outlook") {
//         return PrintMedia.Newspaper;
//     }
// }

// let mediaType: PrintMedia = getMedia("Forbes"); // returns Magazine
// console.log(mediaType);

// // oop
// class Animal {
//     _name: string;
//     // private _age: number;
//     protected _age: number;
//     // protected company: string = "Jump";

//     constructor(name: string, age: number) {
//         this._name = name;
//         this._age = age;
//     }

//     consoleage(): void {
//         console.log(this._age);
//     }
// }
// // const a = new Animal("Fish", 2);
// // console.log(a._age);

// class Cat extends Animal {
//     type: string;

//     constructor(name: string, age: number, type: string) {
//         super(name, age);
//         this.type = type;
//     }

//     consoleage() {
//         console.log(this._age);
//     }
// }

// // generic
// let arr: number[] = [1, 2, 3, 4];
// let arrNumber: Array<number> = [1, 2, 3, 4];
// let arrString: Array<string> = ["1", "2", "3", "4"];
// let arrstr: string[] = ["1", "2", "3", "4"];

// // function toNumber(x: number, y: number): number[] {
// //     return [x, y];
// // }
// // toNumber(2, 4); // [2, 4];

// // function toString(x: string, y: string): string[] {
// //     return [x, y];
// // }
// // toString("2", "4"); // ['2', '4'];

// function toArray<T, R>(x: T, y: R): [T, R] {
//     console.log([x, y]);
//     return [x, y];
// }
// toArray<number, number>(2, 4);
// toArray<string, string>("2", "4");
// toArray<number, string>(2, "4");

// interface Queue<T> {
//     enqueue(item: T): void;
//     dequeue(): T;
//     getqueue(): T[];
// }
// class MyQueue<T> implements Queue<T> {
//     queue: T[];
//     constructor(queue: T[]) {
//         this.queue = queue;
//     }
//     enqueue(item: T): void {
//         this.queue.push(item);
//     }
//     dequeue(): T {
//         return this.queue.shift();
//     }
//     getqueue(): T[] {
//         return this.queue;
//     }
// }
// const myqueue1 = new MyQueue<number>([]);
// myqueue1.enqueue(4);
// console.log(myqueue1.getqueue());

// // Decorator
// function component(target: Function) {
//     target.prototype.id = 100;
// }

// @component
// class Emplyee {
//     id: number;

//     printid(str: string) {
//         console.log(str, this.id);
//     }
// }

// const e = new Emplyee();
// e.printid("print the id: ");

// function course(name: string) {
//     return function (target: Function) {
//         target.prototype.name = name;
//     };
// }
// @course("Jojo")
// class Person {
//     name: string;

//     // constructor(name: string) {
//     //     this.name = name;
//     // }

//     printcourse() {
//         console.log("Angular: ", this.name);
//     }
// }
// const p = new Person();
// p.printcourse();

// interface Person {
//     name: string;
//     age: number;
// }
// function foo(): Person {
//     return { name: "David" } as Person;
// }
// console.log(foo());
