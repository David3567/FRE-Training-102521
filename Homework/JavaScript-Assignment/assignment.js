// 1. Write a JavaScript function that reverse a number. 
function reverseNum (num) {
    return +((num + "").split('').reverse().join(''));
}

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
function palindromeCheck(string) {
    let wordArray = string.split(' ');
    let letterArray = [];
    for (let i = 0; i < wordArray.lenth; i++) {
        letterArray.push(wordArray[i].split(''));
    }
    let reverseArray = letterArray.reverse();
    if (letterArray.join('') === reverseArray.join('')) {
        return true;
    } else return false;
}

// *3. Write a JavaScript function that generates all combinations of a string. 
function generateCombo(string) {
    let array = [];
    for (let i = 0; i < string.length; i++) {
        //array.push(string[i]);
        for (let j = i + 1; j < string.length + 1; j++) {
            array.push(string.slice(i, j));
        }
    } 
    return array;
}

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
function order(string) {
    let newArray = [];
    return newArray.concat(string.split('')).sort().join("");
    
}

// *5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
function upperFirstLetter(string) {
    let array = string.split(" ");
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i][0].toUpperCase().concat(array[i].slice(1)));
    }
    return newArray;
}

//6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
function longest(string) {
    let array = string.split(" ");
    let length = [];
    let sort = []
    for (let i = 0; i < array.length; i++) {
        length.push(array[i].length);
    }
    let newlength = length.concat([]);
    sort = length.sort((a, b) => b - a);
    let index = newlength.indexOf(sort[0]);
    return array[index];
}

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
function countVowel(string) {
    let vowel = ["a", "e", "i", "o", "u",];
    let count = 0;
    let array = string.toLowerCase().split(" ");
    for (let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++) {
            if(vowel.includes(array[i][j])) {
                count += 1;
            }
        }
    }
    return count;
}

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
function prime(number) {
    let half = Math.floor(number / 2);
    console.log(half);
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= half; i ++) {
        if (number % i === 0) {
            return false;
        } else if (number === 2) {
            return true;
        } 
    }
    return true;
}

// 9. Write a JavaScript function which accepts an argument and returns the type. 
function type(arg) {
    return typeof arg;
}

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
function matrix(n) {
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++) {
            if(i === j) {
                console.log("1");
            } else console.log("0");
        }
        console.log("~~~");
    }
}

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
function second(array) {
    let twoNumber = [];
    array.sort((a, b) => a - b);
    twoNumber.push(array[1], array[array.length - 2]);
    return twoNumber;
}

// 12. Write a JavaScript function which says whether a number is perfect. 
function perfectNum(number) {
    let positive = [];
    let half = Math.floor(number / 2);
}


Array.prototype.myReduce = function(...args){
    let acc;
    let index;
    if(args.length > 1) {
        acc = args[1];
        index = 0;
    } else {
        acc = this[0];
        index = 1;
    }
    for (let i = index; i < this.length; i++) {
        acc = args[0](acc, this[i], i, this);
    }
    return acc;
} 

const numbers = [175, 50, 25];

function myFunc(total, num) {
  return total - num;
};

console.log(numbers.myReduce(myFunc, 0));

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

    run() {
        console.log(this.#name + ' is running');
    }
}
class Employee extends Person {
    
    constructor(name, age, company = 'Jump') {
        super(name, age);
        this.company = 'Jump';
    }

    walk() {
        console.log(this.name + ' is walking');
    }
}
const e = new Employee('Dio', 200);

console.log(e);
e.run();
e.walk();


const str = "testtestabc"
const newstr = [...str];
console.log(newstr);

function solution(firstarr, secondarr) {
    
}