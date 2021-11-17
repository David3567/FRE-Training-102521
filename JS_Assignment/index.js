// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output: 34223
const reverseNumber = (num) => {
  let res = 0;
  let target = num;
  while (target > 0) {
    res = res * 10 + (target % 10);
    target = Math.floor(target / 10);
  }
  return res;
};
// ~test~
// const x = 9876504321;
// console.log(reverseNumber(x));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
const checkPalindrome = (str) => {
  const target = str.split("");
  const reverseStr = target.reverse().join("");
  return reverseStr === str ? true : false;
};
// // ~test~
// const str = "showtohs";
// console.log(checkPalindrome(str));

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string: 'dog'
// Expected Output: d, do, dog, o, og, g
const getAllCombination = (str) => {
  const set = new Set();
  let len = 1;
  while (len <= str.length) {
    let start = 0;
    while (start < str.length) {
      set.add(str.substring(start, start + len));
      start++;
    }
    len++;
  }
  return [...set];
};
// ~test~
// const str = "showtime";
// console.log(getAllCombination(str));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
const alphabeticalOrder = (str) => {
  const arr = str.split("");
  arr.sort();
  return arr.join("");
};
// ~test~
// const str = "webmaster";
// console.log(alphabeticalOrder(str));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '
const firstUpper = (str) => {
  const arr = str.split(" ");
  const res = [];
  arr.forEach((substr) => {
    substr = substr[0].toUpperCase() + substr.slice(1);
    res.push(substr);
  });
  return res.join(" ");
};
// ~test~
// const str = "the quick brown fox";
// console.log(firstUpper(str));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'
const longestStr = (str) => {
  const arr = str.split(" ");
  let len = arr[0].length;
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > len) {
      len = arr[i].length;
      res = arr[i];
    }
  }
  return res;
};
// ~test~
// const str = "Web Development Tutorial";
// console.log(longestStr(str));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string: 'The quick brown fox'
// Expected Output: 5
const countVowels = (str) => {
  const vowels = new Set(["a", "i", "u", "e", "o"]);
  const newstr = str.toLowerCase();
  const arr = newstr.split("");
  let count = 0;
  for (let val of arr) {
    if (vowels.has(val)) {
      count++;
    }
  }
  return count;
};
// ~test~
// const str = "The quick brown fox THE QUICK BROWN FOX";
// console.log(countVowels(str));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
const checkPrime = (num) => {
  if (num < 3) {
    return n > 1;
  } else if (num % 2 === 0) {
    return false;
  } else {
    for (let i = 3; i < num; i += 2) {
      if (num % i === 0) {
        return false;
      }
    }
  }
  return true;
};
// ~test~
//2，3，5，7，11，13，17，19，23，29，31，37，41，43，47，53，59，61，67，71，73，79，83，89，97
// const num = 60;
// console.log(checkPrime(num));

// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
const getType = (arg) => {
  return typeof arg;
};
// ~test~
// const a;
// console.log(getType({}));
// console.log(getType(true));
// console.log(getType(function () { }));
// console.log(getType(0));
// console.log(getType("ss"));
// console.log(getType(a));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
const matrix = (n) => {
  let res = [];
  for (let i = 0; i < n; i++) {
    res[i] = new Array(n).fill(0);
  }
  for (let i = 0; i < n; i++) {
    res[i][i] = 1;
  }
  return res;
};
// ~test~
// const n = 3;
// console.log(matrix(n));

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4
const findSecond = (array) => {
  let res = [...array];
  res.sort((a, b) => a - b);
  return res[1] + "," + res[res.length - 2];
};
// ~test~
// const arr = [2, 3, 1, 5, 4];
// console.log(findSecond(arr));

// 12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
const perfectNumber = (num) => {
  if (num < 0) {
    return false;
  }
  let divisors = [];
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisors.push(i);
      sum1 += i;
      if (i !== num) {
        sum2 += i;
      }
    }
  }
  console.log(sum1, sum2);
  if (sum2 === num && sum1 / 2 === num) {
    return true;
  }
  return false;
};
// ~test~
// const num = 28;
// console.log(perfectNumber(num));

// 13. Write a JavaScript function to compute the factors of a positive integer.
const findFactors = (num) => {
  let res = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      res.push(i);
    }
  }
  return res;
};
// ~test~
// const num = 10;
// console.log(findFactors(num));

// If const add = (a, b) => a + b
// const multiplyByTwo = (c) => c * 2
// Then,
// await promisifyFucntion(add)(1, 1) should return 2
// await promisifyFunction(multiplyByTwo)(3).then(val => val + 1) should return 7
function promisifyFunction(callbackFn) {
  return function (...args) {
    const data = callbackFn(...args);
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  };
}
// ~test~
// const add = (a, b) => a + b;
// const multiplyByTwo = (c) => c * 2;
// (async () => {
//   try {
//     const a = await promisifyFunction(add)(1, 1);
//     const b = await promisifyFunction(multiplyByTwo)(3).then(val => val + 1);
//     console.log(a, b);
//   } catch (error) {

//   }
// })();

// 14. Write a JavaScript function to convert an amount to coins.
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output: 25, 10, 10, 1
const amountTocoins = (amount, coins) => {
  if (amount === 0) {
    return [];
  } else {
    if (amount >= coins[0]) {
      left = amount - coins[0];
      return [coins[0]].concat(amountTocoins(left, coins));
    } else {
      coins.shift();
      return amountTocoins(amount, coins);
    }
  }
};
// ~test~
// const amount = 46;
// const coins = [25, 10, 5, 2, 1];
// console.log(amountTocoins(amount, coins));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
const computeExponent = (b, n) => {
  let res = 1;
  for (let i = 0; i < n; i++) {
    res *= b;
  }
  return res;
};
// ~test~
// const bases = 3;
// const exponent = 4;
// console.log(computeExponent(bases, exponent));

// 16. Write a JavaScript function to extract unique characters from a string.
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"
const uniqueChar = (string) => {
  const set = new Set();
  for (let i = 0; i < string.length; i++) {
    set.add(string[i]);
  }
  const arr = [...set];
  return arr.join("");
};
// ~test~
// const str = "thequickbrownfoxjumpsoverthelazydog";
// console.log(uniqueChar(str));
// console.log("thequickbrownfxjmpsvlazydg");

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
const occurrences = (string) => {
  const map = new Map();
  let letterPattern = /[a-zA-Z]+/g;
  let arr = string.match(letterPattern);
  let arrLetter = [];
  arr.forEach((ele) => {
    arrLetter = [...arrLetter, ...ele.split("")];
  });
  arrLetter.forEach((letter) => {
    if (!map.has(letter)) {
      map.set(letter, 0);
    }
    map.set(letter, map.get(letter) + 1);
  });
  return map;
};
// ~test~
// const str = "show me the money again, show them again, and again";
// console.log(occurrences(str));

// 18. Write a function for searching JavaScript arrays with a binary search.
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
const binarySearch = (arr, target) => {
  arr.sort((a, b) => a - b);
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] === target) return true;
    else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    return false;
  }
};
// ~test~
// const arr = [2, 5, 6, 8, 1, 12, 14, 16];
// const target = 6;
// console.log(binarySearch(arr, target));

// 19. Write a JavaScript function that returns array elements larger than a number.
const largerThanNum = (arr, num) => {
  let res = [];
  arr.forEach((ele) => {
    if (ele > num) {
      res.push(ele);
    }
  });
  return res;
};

// function BiggerElements(val) {
//   return function (evalue, index, array) {
//     return evalue >= val;
//   };
// }
// var result = [11, 45, 4, 31, 64, 10].filter(BiggerElements(10));
// console.log(result);
// ~test~
// let arr = [2, 5, 6, 8, 1, 12, 14, 16];
// let target = 5;
// console.log(largerThanNum(arr, target));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
const randomId = (len) => {
  const list =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*?";
  let res = "";
  while (len) {
    res += list[Math.floor(list.length * Math.random())];
    len--;
  }
  return res;
};
// ~test~
// const len = 10;
// console.log(randomId(len));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
// Sample array: [1, 2, 3] and subset length is 2
// Expected output: [[2, 1], [3, 1], [3, 2]]

const subset = (arr, len) => {
  const res = [];
  const subArr = [];
  if (!arr.length || len < 1) {
    return null;
  }
  arr.sort((a, b) => a - b);
  const helper = (subArr, start, res) => {
    if (subArr.length === len) {
      res.push([...subArr]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      if (arr[i + 1] && arr[i] === arr[i + 1]) {
        continue;
      }
      subArr.push(arr[i]);
      helper(subArr, i + 1, res);
      subArr.pop();
    }
  };
  helper(subArr, 0, res);
  return res;
};
// ~test~
// const arr = [1, 2, 3, 4];
// const len = 2;
// console.log(subset(arr, len));

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments: 'microsoft.com', 'o'
// Expected output: 3
const letterOccur = (string, target) => {
  let arr = string.split("");
  let count = 0;
  arr.forEach((ele) => {
    if (ele === target) {
      count++;
    }
  });
  return count;
};
// ~test~
// const str = "microsoft.com";
// const target = "o";
// console.log(letterOccur(str, target));

// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments: 'abacddbec'
// Expected output: 'e'
const firstNotRepeat = (str) => {
  const set = new Set();
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    if (!set.has(str[i])) {
      set.add(str[i]);
      arr.push(str[i]);
    } else {
      arr.splice(arr.indexOf(str[i]), 1);
    }
  }
  return arr[0];
};
// ~test~
// const str = "abacddbec";
// console.log(firstNotRepeat(str));

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
const bubbleSort = (arr) => {
  let len = arr.length;
  let res = [...arr];
  while (len > 1) {
    for (let i = 1; i < len; i++) {
      if (res[i - 1] < res[i]) {
        let tmp = res[i - 1];
        res[i - 1] = res[i];
        res[i] = tmp;
      }
    }
    len--;
  }
  return res;
};
// ~test~
// const numArr = [
//   12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213,
// ];
// console.log(bubbleSort(numArr));

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"
const Longest_Country_Name = (arr) => {
  let resStr = "";
  let maxLength = 0;
  for (ele of arr) {
    if (ele.length > maxLength) {
      resStr = ele;
      maxLength = ele.length;
    }
  }
  return resStr;
};
// ~test~
// const arr = ["Australia", "Germany", "United States of America"];
// console.log(Longest_Country_Name(arr));

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
const findLongestNRepeat = (str) => {
  let tmpStr = "";
  let res = "";
  //let arr = str.split("");
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      if (tmpStr.includes(str[j])) {
        break;
      } else {
        tmpStr += str[j];
      }
    }
    if (res.length < tmpStr.length) {
      res = tmpStr;
    }
    tmpStr = "";
  }
  return res;
};
// ~test~
// const str = "example.com";
// console.log(findLongestNRepeat(str));

// 27. Write a JavaScript function that returns the longest palindrome in a given string.
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
const longestPalindrome = (str) => {
  if (!str) {
    return "";
  }
  let res = "";
  let longestLen = 0;
  const isPalindrom = (i, j, str) => {
    const sli = str.slice(i, j + 1);
    let start = 0;
    let end = sli.length - 1;
    while (start <= end) {
      if (sli[start] !== sli[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  };
  for (let i = 0; i < str.length; i++) {
    let j = str.length - 1;
    while (i <= j) {
      if (j - i < longestLen) {
        break;
      }
      if (str[j] === str[i] && isPalindrom(i, j, str)) {
        let tmp = str.slice(i, j + 1);
        if (tmp.length > longestLen) {
          longestLen = tmp.length;
          res = tmp;
          break;
        }
      }
      j--;
    }
  }
  return res;
};
// ~test~
// const str = "anaanas";
// console.log(longestPalindrome(str));

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
// function foo(x) {
//   alert(x);
// }
// function bar(func) {
//   func("Hello World!");
// }

// //alerts "Hello World!"
// bar(foo);

// function foo(x) {
//   alert(x);
// }
// function bar(func) {
//   func();
// }

// //alerts "Hello World!" (from within bar AFTER being passed)
// bar(function () {
//   foo("Hello World!");
// });

function eat(food1, food2) {
  alert("I like to eat " + food1 + " and " + food2);
}
function myFunc(callback, args) {
  //do stuff
  //...
  //execute callback when finished
  callback.apply(this, args);
}

//alerts "I like to eat pickles and peanut butter"
//myFunc(eat, ["pickles", "peanut butter"]);

// 29. Write a JavaScript function to get the function name.
const getName = (func) => {
  return func.name;
};
// ~test~
// function foo() {}
// const far = foo;
// console.log(typeof far);
// console.log(getName(far));

// 30. calculate the factorial of a number
// factorial of 5 === 5 * 4 * 3 * 2 * 1
// use array functions instead of creating loops

const CalFactorial = (num) => {
  arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  console.log(arr);
  const reducer = (a, b) => a * b;
  arr = arr.reduce(reducer);
  return arr;
};

console.log(CalFactorial(5));
