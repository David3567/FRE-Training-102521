// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output: 34223 

function reverse(num) {
  num = num + "";  // convert num to string
  return num.split("").reverse().join(" "); 
}

console.log(reverse(123));


// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function isPalindrome(entry) {
  const len = entry.length;
  for (let i = 0; i < len/2; i++) {
      if (entry[i] !== entry[len - 1 - i]) {
         return false;
      }
  }
  return true; 
}

console.log(isPalindrome('abc'));
console.log(isPalindrome('cbc'));


// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d,do,dog,o,og,g 

function allCombination(str_entry) {
  let array = new Array();
  const len = str_entry.length;
  for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len + 1; j++) {
         array.push(str_entry.slice(i, j));
      }
  }
  return array; 
}

console.log(allCombination('dog'));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function sort(str_entry) {
  return str_entry.split("").sort().join("");
}

console.log(sort('apple'));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '

 function uppercase(str) {
   let array = str.split(" ");
   let newArray = new Array();
   for (let i = 0; i < array.length; i++) {
     newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
   }
   return newArray.join("");
 }

 console.log(uppercase('apple cat'));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'

function longest(str) {
  let array = str.split(" ");
  let count = 0;
  let result = 0;
  let longest = "";
  for (let i = 0; i < array.length; i++) {
      for(let j = 0; j < array[i].length; j++) {
       count++;
      }
      if (count > result) {
        result = count;
        longest = array[i];
      }
      count = 0; 
  }
  return longest; 
}
console.log(longest('apple cat abcdefg ahkfdkhjkbsfjke kj'));
 

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string: 'The quick brown fox' 
// Expected Output: 5

function countVowels(str) {
 const set = new Set();
 const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
 for (let i = 0; i < vowels.length; i++) {
   set.add(vowels[i]);
 }
 let count = 0;
 for (let i = 0; i < str.length; i++) {
   if (set.has(str[i])) {
     count++;
   }
 }
 return count;
}
console.log(countVowels('apple'));



// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(num) {
 return (num -1) % 2 === 0 ? true: false;
}
console.log(isPrime(4));

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function checkType(entry) {
 const types = [Object, Boolean, Function, Number, String, RegExp];
if (typeof entry === "object" || typeof entry === "function") {
    for (let i = 0; i < types.length; i++) {
        if (entry instanceof types[i]) {
          return types[i];
        }
    }
}
 return typeof entry; 
}

console.log(checkType(true));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 

function matrixCreator(n) {
  const matrix = new Array(n);
  let i = 0;
  let j = 0;
   for (i = 0; i < n; i++) {
     matrix[i] = new Array(n);
      for (j = 0; j < n; j++) {
         if (j === i) {
            matrix[i][j] = '1';
         }
         matrix[i][j] = '0';
      }
   }
   return matrix; 
  }
console.log(matrixCreator(3));

   
// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4 
 
 

// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

function isPerfect(num) {
 let result = 0;
  for (let i = 1; i <= num / 2; i++) {
     if (num % i === 0) {
       result += i;
     }
  }
  if (result === num && result !== 0) {
     return true; 
  }
  return false; 
}
console.log(isPerfect(5));

// 13. Write a JavaScript function to compute the factors of a positive integer. 

function getFactors(num) {
 let result = [];
 for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      result.push(i);
    }
 }
 return result;
}


console.log(getFactors(15));


// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output: 25, 10, 10, 1

function combination(amount, coins) {
 // sc
 if (amount === 0) return [];
 if (amount >= coins[0]) {
     let left = (amount - coins[0]);
     return [coins[0]].concat(combination(left, coins));
     // concat merge 2 arrays
 } else {
    coins.shift();
    return combination(amount, coins);
 }
}

console.log(combination(46, [25, 10, 5, 2, 1]));

// 15. Write a JavaScript function to compute the value of b^n where n is the exponent and b is the bases. Accept b and n from the user and display the result. 


function power(b, n) {
 let result = 1;
 for (let i = 1; i <= n; i++) {
   result *= b; 
 }
 return result; 
}

console.log(power(2, 3));

  
// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"

function unique_char(str) {
   let uniq = "";
   for (let i = 0; i < str.length; i++) {
      if (uniq.indexOf(str.charAt(i)) == -1) {
         uniq += str[i];
      }
   }
  return uniq;
 }

console.log(unique_char('thequickbrownfoxjumpsoverthelazydog'));

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string. 

 
// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
   

 function binarySearch(array, target) {
    let left = 0;
    left right = array.length - 1;
    while (left <= right) {
     left mid = left + (right - left) / 2;
     if (array[mid] === target) return mid;
     else if (array[mid] < target) {
        left = mid + 1;
     } else {
        right = mid - 1;
      }
     }
     return -1;
   }
// wrong 


// 19. Write a JavaScript function that returns array elements larger than a number. 

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function creatId(length) {
   let text = "";
   let char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   for (let i = 0; i < l; i++) {
     text += char_list.charAt(Math.floor(Math.random() * char_list.length));
     // Math.floor return the largest integer
   }
   return text; 
}



// // 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// // Sample array: [1, 2, 3] and subset length is 2 
// // Expected output: [[2, 1], [3, 1], [3, 2]]


function subset(array, n, cur, result, index) {
  if (cur === n) {
    result.add(new ArrayList<>(cur));
  }
  let result = [];
  for (let i = 0; i < array.length; i++) {}

}
// wrong

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o' 
// Expected output: 3 

fucntion countFrequent(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
     if (str.charAt(i) === letter) {
        count++;
     }
  }
  return count; 
}

// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddbec' 
// Expected output: 'e' 


function firstNonRepeat(str) {
   let array = str.split("");
   let count = 0;
   let result = "";
   for (let i = 0; i < array.length; i++) {
      count = 0;
      for (let j = 0; j < array.length; j++) {
           if (array[i] === array[j]) {
              count++;
           }
      }
      if (count < 2) {
         result = array[i];
         break;
      }  
   }
   return result; 
}
console.log(firstNonRepeat('abacddbec'));


// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

  
// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

function longestName(array) {
  // array.split("");
  let count = 0;
  let longest = 0;
  let result = "";
  for (let i = 0; i < array.length; i++) {
     for (let j = 0; j < array[i].length; j++) {
         count++;
     }
    if (count > longest) {
       result = array[i];
    }
  }
  return result; 
}
console.log(longestName(['a', 'ab', 'abc']));

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 

// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function testFunction(num, exFunction) {
    exFunction;
}

function exFunction() {
   return 1;
}



// 29. Write a JavaScript function to get the function name. 

function abc() {
    console.log( arguments.callee.name );
}
