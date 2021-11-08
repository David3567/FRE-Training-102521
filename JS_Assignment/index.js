
// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output: 34223 
const reverseNumber = num => {
  let res = 0;
  let target = num;
  while (target > 0) {
    res = res * 10 + target % 10;
    target = Math.floor(target / 10);
  }
  return res;
}
// ~test~
// const x = 9876504321;
// console.log(reverseNumber(x));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
const checkPalindrome = str => {
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
const getAllCombination = str => {
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
}
// ~test~
// const str = "showtime";
// console.log(getAllCombination(str));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
const alphabeticalOrder = str => {
  const arr = str.split("");
  arr.sort();
  return arr.join("");
}
// ~test~
// const str = "webmaster";
// console.log(alphabeticalOrder(str));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '
const firstUpper = str => {
  const arr = str.split(" ");
  const res = [];
  arr.forEach(substr => {
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
const longestStr = str => {
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
const countVowels = str => {
  const vowels = new Set(['a', 'i', 'u', 'e', 'o']);
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
const checkPrime = num => {
  if (num < 3) {
    return n > 1;
  }
  else if (num % 2 === 0) {
    return false;
  }
  else {
    for (let i = 3; i < num; i += 2) {
      if (num % i === 0) {
        return false;
      }
    }
  }
  return true;
}
// ~test~
//2，3，5，7，11，13，17，19，23，29，31，37，41，43，47，53，59，61，67，71，73，79，83，89，97
// const num = 60;
// console.log(checkPrime(num));

// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
const getType = arg => {
    return typeof(arg);
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
const matrix = n => {
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
const findSecond = array => {
  let res = [...array];
  res.sort((a, b) => a - b);
  return res[1] + "," + res[res.length - 2]
}
// ~test~
// const arr = [2, 3, 1, 5, 4];
// console.log(findSecond(arr));

// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
const perfectNumber = num => {
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
const findFactors = num => {
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
  return function(...args) {
    const data = callbackFn(...args)
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  }
};
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
