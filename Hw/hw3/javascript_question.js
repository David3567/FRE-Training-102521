// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output: 34223 
function Question1(input) {
   return +(input + '').split('').reverse().join('');
}
//------------------------------------------------------------------------------

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
function Question2(input) {
   for (let i = 0; i < input.length; i++) {
      const otherEnd = input.length - 1 - i;
      if (otherEnd <= i) {
         return true;
      }
      if (input[i] != input[otherEnd]) {
         return false;
      }
   }
}

//------------------------------------------------------------------------------

// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d, do, dog, o, og, g  001, 010, 011,100,110, 111

function Question3(input) {
   let ans = [];
   let arr = input.split('');
   if (arr.length === 0) {
      return
   }
   for (let i = 0; i < 2 ** arr.length; i++) {
      let temp = "";
      for (let j = 0; j < arr.length; j++) {
         if (i & 2 ** j) {
            temp += arr[j];
         }
      }
      if (temp !== "") {
         ans.push(temp);
      }
   }
   return ans;
}
//------------------------------------------------------------------------------

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function Question4(input) {
   return input.split('').sort().join('');
}
//------------------------------------------------------------------------------

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '

function Question5(input) {
   let arr = input.split(' ');
   for (let i in arr) {
      if (arr[i].length !== 0) {
         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
   }
   return arr.join(' ');
}
//------------------------------------------------------------------------------

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'

function Question6(input) {
   let arr = input.split(' ');
   let ansIndex = -1;
   let maxLen = 0;
   for (let i in arr) {
      if (arr[i].length > maxLen) {
         maxLen = arr[i].length;
         ansIndex = i;
      }
   }
   if (ansIndex !== -1) {
      return arr[ansIndex];
   }
   return "empty input";
}
//------------------------------------------------------------------------------

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string: 'The quick brown fox' 
// Expected Output: 5

function Question7(input) {
   arr = input.split('');
   return arr.reduce((prev, curr) => {
      if (curr === 'a' || curr === 'e' || curr === 'i' || curr === 'o' || curr === 'u') {
         return ++prev;
      }
      return prev;
   }, 0);
}
//------------------------------------------------------------------------------

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function Question8(input) {
   const half = Math.floor(input / 2);
   for (let i = 2; i <= half; i++) {
      if (input % i === 0) {
         return false;
      }
   }
   return true;
}
//------------------------------------------------------------------------------

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function Question9(input) {
   return typeof (input);
}

//------------------------------------------------------------------------------

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
function Question10(input) {
   let newArr = []
   for (let i = 0; i < input; i++) {
      let zero = '0'
      let temp = zero.repeat(input);
      let tempArr = temp.split('');
      tempArr[i] = '1';
      newArr.push(tempArr);
   }
   return newArr;
}

//------------------------------------------------------------------------------

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4 
function Question11(input) {
   input.sort((first, second) => first - second);
   ansArr = [];
   if (input.length > 1) {
      ansArr.push(input[1]);
   }
   if (input.length - 2 >= 0) {
      ansArr.push(input[input.length - 2]);
   }
   return ansArr;
}

//------------------------------------------------------------------------------

// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, 
// the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half
// the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal 
// to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
function Question12(input) {
   const arr = [];
   const half = Math.floor(input / 2) + 1;
   for (let i = 1; i < half; i++) {
      if (input % i == 0) {
         arr.push(i);
      }
   }
   let sum = 0;
   for (let val of arr) {
      sum += val;
   }
   if (sum === input) {
      return true;
   }
   return false;
}

//------------------------------------------------------------------------------

// 13. Write a JavaScript function to compute the factors of a positive integer. 
function Question13(input) {
   const arr = [];
   const half = Math.floor(input / 2) + 1;
   for (let i = 1; i < half; i++) {
      if (input % i == 0) {
         arr.push(i);
      }
   }
   return arr;
}
//------------------------------------------------------------------------------

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output: 25, 10, 10, 1
function Question14(input, coins) {
   coins.sort((first, second) => second - first)
   const arr = [];
   for (let i = 0; i < coins.length; i++) {
      const coinVal = coins[i];
      while (input >= coinVal) {
         arr.push(coinVal);
         input -= coinVal;
      }
   }
   return arr;

}

//------------------------------------------------------------------------------

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
function Question15(b, n) {
   console.log(b ** n)
}
//------------------------------------------------------------------------------

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"
function Question16(input) {
   const ansArr = [];
   let hashMap = {};
   const inputArr = input.split("");

   for (let i of inputArr) {
      if (i in hashMap) {
         continue;
      }
      else {
         ansArr.push(i);
         hashMap[i] = "taken";
      }
   }
   return ansArr;
}

//------------------------------------------------------------------------------

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string. 
function Question17(input) {
   const ansObj = {};
   const inputArr = input.split("");
   for (let inputVal of inputArr) {
      if (inputVal in ansObj) {
         ansObj[inputVal]++;
      }
      else {
         ansObj[inputVal] = 1;
      }
   }
   return ansObj
}
//------------------------------------------------------------------------------

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
function Question18(sorted_array, value) {
   var startIndex = 0;
   var endIndex = sorted_array.length - 1;
   while (startIndex <= endIndex) {
      var mediumIndex = (endIndex + startIndex) >> 1;
      var cmp = value - sorted_array[mediumIndex];
      if (cmp > 0) {
         startIndex = mediumIndex + 1;
      } else if (cmp < 0) {
         endIndex = mediumIndex - 1;
      } else {
         return mediumIndex;
      }
   }
   return -1;
}

//------------------------------------------------------------------------------

// 19. Write a JavaScript function that returns array elements larger than a number. 
function Question19(arr, number) {
   let ans = []
   for (let index in arr) {
      if (arr[index] > number) {
         ans.push(index);
      }
   }
   return ans;
}
//------------------------------------------------------------------------------

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function Question20(input) {
   const samepleStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
   const ansArr = [];
   for (let i in input) {
      const random = Math.floor(Math.random() * 61);
      ansArr.push(samepleStr.charAt(random));
   }
   return ansArr;
}
//------------------------------------------------------------------------------

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]
// Warning, mind blowingly bad algorithm. Don't use.
// O(2^n^2)

function Question21(arr, subLen) {
   const resultArr = [];
   for (let i = 0; i < 2 ** arr.length; i++) {
      const result = [];
      for (let j = 0; j < arr.length; j++) {
         if (i & 2 ** j) {
            result.push(arr[j]);
            if (result.length > subLen) {
               break;
            }
         }
      }
      if (result.length === subLen) {
         resultArr.push(result);
      }
   }
   return resultArr;
}
//------------------------------------------------------------------------------
// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o' 
// Expected output: 3 

function Question22(input, letter) {
   let ans = 0;
   const arr = input.split('');
   for (let currLetter of arr) {
      if (currLetter === letter) {
         ans++;
      }
   }
   return ans;
}
//------------------------------------------------------------------------------

// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddberc' 
// Expected output: 'e' 
function Question23(input) {
   const charBank = {};
   input = input.split("");
   for (const letter of input) {
      if (letter in charBank) {
         charBank[letter]++;
      } else {
         charBank[letter] = 1;
      }
   }
   for (const letter of input) {
      if (charBank[letter] === 1) {
         return letter;
      }
   }
}

//------------------------------------------------------------------------------
// 24. Write a JavaScript function to apply Bubble Sort algorithm.
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function Question24(input) {
   for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input.length - 1 - i; j++) {
         if (input[j] < input[j + 1]) {
            let temp = input[j];
            input[j] = input[j + 1];
            input[j + 1] = temp;
         }
      }
   }
   return input;
}

//------------------------------------------------------------------------------

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"
function Question25(input) {
   let ansIndex = 0;
   let longest = -1;
   for (let i = 0; i < input.length; i++) {
      if (input[i].length > longest) {
         longest = input[i].length;
         ansIndex = i;
      }
   }
   return input[ansIndex];
}
//------------------------------------------------------------------------------
// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 
function Question26(input) {
   const charBank = {};
   const arr = input.split('');
   let longestLen = 0;
   let ansPair = [0, 0];
   for (let i = 0, j = 0; j < arr.length; j++) {
      const newLetter = arr[j];
      if (!(newLetter in charBank) || charBank[newLetter] === 0) {
         charBank[newLetter] = 1;
         if ((j - i) > longestLen) {
            longestLen = j - i;
            ansPair[0] = i;
            ansPair[1] = j;
         }
      } else {
         charBank[newLetter] = 0;
         charBank[arr[i]] = 0;
         i++
      }
   }
   return input.slice(ansPair[0], ansPair[1] + 1);
}
//------------------------------------------------------------------------------

// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest
// symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given
// string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana".
// The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra",
//  there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot 
// be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
function Question27(input) {
   let start = 0; end = 0;
   function findPalinAroundCenter(left, right, string) {
      let L = left, R = right;
      while (L >= 0 && R < string.length && string.charAt(L) === string.charAt(R)) {
         L--;
         R++;
      }
      return R - L - 1;
   }
   for (let i = 0; i < input.length; i++) {
      let len1 = findPalinAroundCenter(i, i, input);
      let len2 = findPalinAroundCenter(i, i + 1, input);
      let len = Math.max(len1, len2);
      if (len > end - start) {
         start = i - Math.floor((len - 1) / 2);
         end = i + Math.floor(len / 2);
      }
   }
   return input.slice(start, end + 1);
}


//------------------------------------------------------------------------------
// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function Question28(input) {
   input();
}
//------------------------------------------------------------------------------
// 29. Write a JavaScript function to get the function name. 
function Question29(input) {
   return input.name;
}
console.log(Question27("abccbc"));