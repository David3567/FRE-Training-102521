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

type Fntype = (num: number, str: string) => string;
type PersonType = { name: string; age: number };

interface FnInterface {
    (num: number, str: string): string;
}

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
