//1. Write a JavaScript function that reverse a number.

let reverseNum = function (x = 32243) {
  x = parseInt(x.toString().split("").reverse().join(""));
  return x;
};

console.log("Q1. ", reverseNum());
console.log();

//2. Write a JavaScript function that checks whether a passed string is palindrome or not?

let checkPalindrom = (s) => {
  let left;
  let right;
  for (left = 0, right = s.length - 1; left < right; left++, right--) {
    if (s[left] !== s[right]) {
      return false;
    }
  }
  return true;
};
console.log("Q2. ", checkPalindrom("abbae"));
console.log();

//3. Write a JavaScript function that generates all combinations of a string.
// Expected Output: d, do, dog, o, og, g
let generateAllString = (s) => {
  let res = [];
  for (let h = 0; h < s.length; h++) {
    for (let i = h; i < s.length; i++) {
      let str = "";
      for (let j = h; j < i + 1; j++) {
        str += s[j];
      }
      res.push(str);
    }
  }
  return res;

  // let res = [];
  // bk(s);
  // return res;
  // function bk(s) {
  //   if (s.length === 0) {
  //     return;
  //   } else {
  //     bk(s, s.substr());
  //   }
  // }
};
console.log("Q3. ", generateAllString("dog"));
console.log();

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.

let orderString = (s) => {
  s = s.split("").sort().join("").toString();
  return s;
};

console.log("Q4. ", orderString("webmaster"));
console.log();

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

function strToUpper(s) {
  return s[0].toUpperCase() + s.substr(1, s.length);
}
console.log("Q5. ", strToUpper("the quick brown fox"));
console.log();

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

let longestWord = (s) => {
  s = s.split(" ");
  let max = 0;
  let ans = "";
  for (let str of s) {
    if (str.length > max) {
      max = str.length;
      ans = str;
    }
  }
  return ans;
};
console.log("Q6. ", longestWord("Web Development Tutorial"));
console.log();

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

let countVowels = (s) => {
  s = s.toLowerCase();
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] === "a" ||
      s[i] === "e" ||
      s[i] === "i" ||
      s[i] === "o" ||
      s[i] === "u"
    ) {
      count++;
    }
  }
  return count;
};

console.log("Q7. ", countVowels("The quick brown fox"));
console.log();

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

let isPrime = (num) => {
  let sqrtNum = Math.ceil(Math.sqrt(num));
  console.log(sqrtNum);
  let divisor = 2;
  while (divisor <= sqrtNum) {
    if (num % divisor === 0) {
      return `${num} is not a prime`;
    }
    divisor++;
  }
  return `${num} is a prime`;
};

console.log("Q8. ", isPrime(121));
console.log();

// 9. Write a JavaScript function which accepts an argument and returns the type

let theType = (something) => {
  return typeof something;
};

console.log(
  "Q9. ",
  theType(function () {})
);
console.log();

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.

let matrix = (n) => {
  let ans = [];
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j < n; j++) {
      if (i === j) {
        arr.push(1);
      } else {
        arr.push(0);
      }
    }
    ans.push(arr);
  }
  return ans;
};
console.log("Q10. ", matrix(5));
console.log();

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

let findSecond = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  arr.sort((a, b) => {
    return a - b;
  });
  return [arr[1], arr[arr.length - 2]];
};

console.log("Q11. ", findSecond([1, 2, 3, 4, 5]));
console.log();

// 12. Write a JavaScript function which says whether a number is perfect.
console.log();

// 13. Write a JavaScript function to compute the factors of a positive integer.
let factorsOfInt = (num) => {
  let factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
};

console.log("Q13. ", factorsOfInt(24));
console.log();

//14. Write a JavaScript function to convert an amount to coins.

let amountTocoins = (num, coins) => {
  let res = [];
  while (num !== 0) {
    for (let i = 0; i < coins.length; i++) {
      while (num - coins[i] >= 0) {
        num -= coins[i];
        res.push(coins[i]);
      }
    }
  }
  return res;
};

console.log("Q14. ", amountTocoins(46, [25, 10, 5, 2, 1]));
console.log();

//15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.

let bn = (b, n) => {
  res = 1;
  let i = 1;
  while (i <= n) {
    res *= b;
    i++;
  }
  return res;
};
console.log("Q15. ", bn(3, 4));
console.log();

//16. Write a JavaScript function to extract unique characters from a string.
let getUniqueChar = (s) => {
  let map = {};
  let res = [];
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = s[i];
      res.push(s[i]);
    }
  }
  return res.join("");
};
console.log("Q16. ", getUniqueChar("thequickbrownfoxjumpsoverthelazydog"));
console.log();

//17. Write a JavaScript function to get the number of occurrences of each letter in specified string.

const occrrencesOfEachLetter = (s) => {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }
  return map;
};
console.log(
  "Q17. ",
  occrrencesOfEachLetter("thequickbrownfoxjumpsoverthelazydog")
);
console.log();

// 18. Write a function for searching JavaScript arrays with a binary search.

const binarySearch = (nums, target) => {
  nums.sort((a, b) => {
    return a - b;
  });
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      console.log("target found");
      return middle;
    } else {
      if (nums[middle] > target) {
        left = middle;
      } else {
        right = middle;
      }
    }
  }
};
console.log("Note Q18. The index returned is from the sorted list");
console.log("Q18. ", binarySearch([20, 1, 32, 15, 31, 90, 74], 31));
console.log();

// 19. Write a JavaScript function that returns array elements larger than a number.

let largerNums = (nums, pivot) => {
  return (nums = nums.filter((num) => {
    return num > pivot;
  }));
};
console.log("Q19. ", largerNums([20, 1, 32, 15, 31, 90, 74], 10));
console.log();

//20. Write a JavaScript function that generates a string id (specified length) of random characters.

const generateString = (str, specifiedLength) => {
  //65-90, 97-122, 48-57
  let i = 0;
  let id = "";
  while (i < specifiedLength) {
    //48-122
    let rand = Math.floor(Math.random() * 74) + 1 + 48;
    if (rand <= 57) {
      i++;
      id = id.concat(String.fromCharCode(rand));
      console.log(id);
    } else if (rand >= 65 && rand <= 90) {
      i++;
      id = id.concat(String.fromCharCode(rand));
      console.log(id);
    } else if (rand >= 97 && rand <= 122) {
      i++;
      id = id.concat(String.fromCharCode(rand));
    }
  }
  return id;
};
console.log("Q20. ", generateString("f", 3));
console.log();

//21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.

// const fixedLengthComb = (arr, leng) => {
//   res = [];
//   bk(arr, leng);
//   return res;

//   function bk(arr, leng, comb = []) {
//     if (comb.length === leng) {
//       res.push(comb);
//       return;
//     } else {
//       for (let i = 0; i < arr.length; i++) {    1
//         comb.push(arr[i]);
//         bk(arr, leng, comb);
//       }
//     }
//   }
// };

// console.log("Q21. ", fixedLengthComb([1, 2, 3], 2));
// console.log();

//22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

const countNumOccurences = (str, letter) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
};
console.log("Q22. ", countNumOccurences("microsoft.com", "o"));
console.log();

//23. Write a JavaScript function to find the first not repeated character.

const firstRepeat = (s) => {
  let map = {};
  let nonRepeat = "";
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = s[i];
      nonRepeat = s[i];
      for (let j = i + 1; j < s.length; j++) {
        if (s[j] === s[i]) {
          break;
        }
        if (s[i] !== s[j] && j === s.length - 1) {
          return nonRepeat;
        }
      }
    } else {
      continue;
    }
  }
  return "all char are repeated";
};
console.log("Q23. ", firstRepeat("abacddbec"));
console.log();

//24. Write a JavaScript function to apply Bubble Sort algorithm.

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        swap(j, j + 1, arr);
      }
    }
  }
  return arr;
  function swap(a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    return;
  }
};
console.log("Q24. ", bubbleSort([20, 1, 32, 15, 31, 90, 74]));
console.log();

//25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
const Longest_Country_Name = (countries) => {
  let max = Number.MIN_VALUE;
  let map = {};
  for (let country of countries) {
    if (parseInt(country.lentgh) > parseInt(max)) {
      console.log("tes");
      max = country.length;
      map[max] = country;
      console.log(country);
    }
  }
  return map[max];
};

const Longest_Country_Name2 = (countries) => {
  let max = Number.MIN_VALUE;
  let map = {};
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].length > max) {
      max = countries[i].length;
      map[max] = countries[i];
    }
  }
  return map[max];
};

console.log(
  "Q25. ",
  Longest_Country_Name2(["Australia", "Germany", "United States of America"])
);
console.log();

//26. Write a JavaScript function to find longest substring in a given a string without repeating characters.

const longestSubstring = (s) => {
  let count = 0;
  let max = 0;
  let map = {};
  let j = 0;
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      count++;
      map[s[i]] = count;
      max = Math.max(max, count);
    } else {
      j++;
      i = j - 1;
      count = 0;
      map = {};
    }
  }
  return max;
};
console.log("Q26. ", longestSubstring("australia"));
console.log();

//27. Write a JavaScript function that returns the longest palindrome in a given string.

// const longestPalindrom = (s) => {};
// console.log(longestPalindrom("Q27. ","Australia"));
console.log();

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
function a() {
  return "a";
}

function passFunct(ft) {
  return function b() {
    return "b";
  };
}
console.log("Q28. ", passFunct(a));
console.log();

// 29. Write a JavaScript function to get the function name.
const someFunction = function whatIsMyName() {
  console.log("test test");
};
console.log("Q29. ", someFunction.name);
