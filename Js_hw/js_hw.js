/* 1. Write a JavaScript function that reverse a number. */
// const num= 32243;
// console.log(+(num+"").split('').reverse().join(""));

/* 2.Write a JavaScript function that checks whether a passed string is palindrome or not? */
// let str = "nurses run";
// function checkPalindrome() {
//   // Remove white space
//   str = str.replace(" ","");
//   // Reverse original string
//   const reverseStr = str.split("").reverse().join("");
//   if (reverseStr === str) {
//     return true;
//   } else {
//     return false;
//   }
// }

// if (checkPalindrome()) {
//   console.log("Palindrome");
// } else {
//   console.log("Not Palindrome");
// }

/* 3.Write a JavaScript function that generates all combinations of a string */
// const str = "dog";
// const arr = [...str];
// const newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length + 1; j++) {
//     newArr.push(arr.slice(i, j));
//   }
// }

// console.log(newArr);

/*4. Write a JavaScript function that returns a passed string with letters in alphabetical order */
// const str="webmaster";
// const arr=[...str];

// console.log(arr.sort())

/*5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
each word of the string in upper case. */

// const str = "the quick brown fox";
// function toUpper(str) {
//   return str
//       .toLowerCase()
//       .split(' ')
//       .map(function(word) {
//           return word[0].toUpperCase() + word.substr(1);
//       })
//       .join(' ');
//    }

// console.log(toUpper(str));

/*6. Write a JavaScript function that accepts a string as a parameter and find the longest word
within the string. */

// const str = "Web Development Tutorial";
// const arr = [...str.split(" ")];
// let longestWord = "";
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length >= longestWord.length) {
//     longestWord = arr[i];
//   }
// }
// console.log(longestWord);

/* 7.Write a JavaScript function that accepts a string as a parameter and counts the number of
vowels within the string. */
// const str= "The quick brown fox"
// const countVowels = str => Array.from(str)
//   .filter(letter => 'aeiou'.includes(letter)).length;
// console.log(countVowels(str))

/*8.Write a JavaScript function that accepts a number as a parameter and check the number is
prime or not.  */
// const num = 4;
// function isPrime(num) {
//   for (let i = 2; i < num; i++) if (num % i === 0) return false;
//   return num > 1;
// }

// console.log(isPrime(num));

/*9. Write a JavaScript function which accepts an argument and returns the type.  */
// function type(params){
//   return typeof params;
// }

// console.log(type(5))

/*Write a JavaScript function which returns the n rows by n columns identity matrix */
// function countMatrix(n) {
//   let arr = [];
//   for (let i = 0; i < n; i += 1) {
//     arr[i] = [];
//     for (let j = 0; j < n; j += 1) {
//       arr[i][j] = { i: i, j: j };
//     }
//   }
//   return arr;
// }

/*13. Write a JavaScript function to compute the factors of a positive integer.  */
// const num = 12
// for (let i = 1; i <= num; i++) {
//   if (num % i == 0) {
//     console.log(i);
//   }
// }

/*14.Write a JavaScript function to convert an amount to coins. */
// let toCoins = function (n, arr) {
//   if (n === 0) {
//     return [];
//   } else {
//     if (n >= arr[0]) {
//       var t = n - arr[0];
//       return [arr[0]].concat(toCoins(t, arr));
//     } else {
//       arr.shift();
//       return toCoins(n, arr);
//     }
//   }
// };

/*16. Write a JavaScript function to extract unique characters from a string. */
// function uniqueChar(str1) {
//   let str = str1;
//   let uniql = "";
//   for (let x = 0; x < str.length; x++) {
//     if (uniql.indexOf(str.charAt(x)) == -1) {
//       uniql += str[x];
//     }
//   }
//   return uniql;
// }

// console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog"));

/* 19. */
// function biggerElements(val) {
//   return function (evalue, index, array) {
//     return evalue >= val;
//   };
// }

// let result = [11, 45, 4, 31, 64, 10].filter(biggerElements(10));

/*23. Write a JavaScript function to find the first not repeated character*/
// function find_FirstNotRepeatedChar(str) {
//   let arr = str.split("");
//   let result = "";
//   let ctr = 0;

//   for (let x = 0; x < arr.length; x++) {
//     ctr = 0;
//     for (var y = 0; y < arr.length; y++) {
//       if (arr[x] === arr[y]) {
//         ctr += 1;
//       }
//     }
//     if (ctr < 2) {
//       result = arr[x];
//       break;
//     }
//   }
//   return result;
// }

/*24. Write a JavaScript function to apply Bubble Sort algorithm.  */
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] < arr[i]) {
//       let temp = arr[i + 1];
//       arr[i + 1] = arr[i];
//       arr[i] = temp;
//     }
//   }
//   return arr;
// }

/*25.Write a JavaScript function that accept a list of country names as input and returns the
longest country name as output */

// function longestCountryName(arr) {
//   let longest = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > longest) {
//       longest = arr[i];
//     }
//   }
//   return longest;
// }

/*28. Write a JavaScript program to pass a 'JavaScript function' as parameter. */
// function getAParam(str){
//   return str;
// }

/*29.Write a JavaScript function to get the function name */
// function getFnName(fn){
//   return fn.name;
// }
