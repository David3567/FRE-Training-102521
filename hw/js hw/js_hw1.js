// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output: 34223 
const reverseNum = (x) => {
    return +(x + "").split("").reverse().join("");
};
console.log("Q1", reverseNum(32243));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
// madam or nurses run.
const isPalindrome = (s) => {
    let len = s.length;
    for (let i in s) {
        if (s[i] != s[len - 1 - i])
            return false;
    }   
    return true;
};
console.log("Q2", isPalindrome("ysy"));

// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d, do, dog, o, og, g 
const allCombinations = (s) => {
    const res  = [];
    for (let i = 0; i < s.length; i++) {
        let str = "";
        for (let j = i; j < s.length; j++) {
            str += s[j];
            res.push(str);
        }
    }
    return res;
};
console.log("Q3", allCombinations("dog"));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
const sortString = (s) => {
    return s.split('').sort().join('');
};
console.log("Q4", sortString("webmater"));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
// each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '
const firstUpper = (s) => {
    const words = [];
    for (let word of s.split(" ")) {
        words.push(word[0].toUpperCase() + word.slice(1));
    };
    return words.join(" ");
};
console.log("Q5", firstUpper("the quick brown box"));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'
const longestWord = (s) => {
    let res = "";
    for (let word of s.split(" ")) {
        if (word.length > res.length) {
            res = word;
        }
    }
    return res;
};
console.log("Q6", longestWord('Web Development Tutorial'));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of
// vowels within the string. 
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
// vowel here. 
// Example string: 'The quick brown fox' 
// Expected Output: 5
const countVowels = (s) => {
    s.toLowerCase();
    let count = 0;
    for (let c of s) {
        if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
            count++;
        }
    }
    return count;
};
console.log("Q7", countVowels('The quick brown fox'));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is
// prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.
const isPrime = (x) => {
    let sqrt = Math.sqrt(x);
    for (let i = 2; i <= sqrt; i++) {
        if (x % i === 0) {
            return false;
        } 
    }
    return true;
};
console.log("Q8", isPrime(89));

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number, string,
// and undefined.
const getType = (arg) => {
    return typeof arg;
};
console.log("Q9", getType(null));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
const identityMatrix = (n) => {
    let res = [];
    for (let i = 0; i < n; i++) {
        let arr =[];
        for (let j = 0; j < n; j++) {
            if (i === j) {
                arr.push(1);
            } else {
                arr.push(0);
            }
        }
        res.push(arr);
    }
    return res;
};
console.log("Q10", identityMatrix(5));
                 
// 11. Write a JavaScript function which will take an array of numbers stored and find the second
// lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4 
const findSecond = (nums) => {
    if (nums.length < 2) {
        return nums;
    }
    nums.sort();
    return [nums[1], nums[nums.length - 2]];
};
console.log("Q11", findSecond([1,2,3,4,5]));

// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to
// the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the
// number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is
// half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1
// + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 +
// 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the
// perfect numbers 496 and 8128.
const isPerfectNum = (n) => {
    const divisors = [];
    let sqrt = Math.sqrt(n);
    for (let i = 1; i <= sqrt; i++) {
        if (n % i === 0) {
            divisors.push(i);
            divisors.push(n / i);
        } 
    }
    return divisors.reduce((a, b) => a + b) / 2 === n;
};
console.log("Q12", isPerfectNum(6));


// 13. Write a JavaScript function to compute the factors of a positive integer. 
const getFactors = (n) => {
    const res = [];
    let sqrt = Math.sqrt(n);
    for (let i = 1; i <= sqrt; i++) {
        if (n % i === 0) {
            res.push(i);
            res.push(n / i);
        } 
    }
    return res;
};
console.log("Q13", getFactors(12));

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output: 25, 10, 10, 1
const amountTocoins = (n, arr) => {
    const res = [];
    while (n > 0) {
        for (let i = 0; i < arr.length; i++) {
            while (n - arr[i] >= 0) {
                n -= arr[i];
                res.push(arr[i]);
            }
        }
    }
    return res;
};
console.log("Q14", amountTocoins(46, [25, 10, 5, 2, 1]));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
// bases. Accept b and n from the user and display the result. 
const bn = (b, n) => {
    let res = 1;
    for (let i = 0; i < n; i++) {
        res *= b;
    }
    return res;
};
console.log("Q15", bn(2, 5));

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"
const getUniqueChar = (s) => {
    const visited = new Set();
    const arr = [];
    for (let c of s) {
        if (!visited.has(c)) {
            arr.push(c);
        }
        visited.add(c);
    }
    return arr.join("");
};
console.log("Q16", getUniqueChar("thequickbrownfoxjumpsoverthelazydog"));

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
const getOccurrences = (s) => {
    const res = new Map();
    for (let c of s) {
        res.set(c, (res.has(c) ? res.get(c) + 1 : 1));
    }
    return res;
};
console.log("Q17", getOccurrences("thequickbrownfoxjumpsoverthelazydog"));

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds
// the desired value.
const binarySearch = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid;
        } else {
            right = mid;
        }
    }
    return left;
};
console.log("Q18", binarySearch([1,3,5,8,10], 8));

// 19. Write a JavaScript function that returns array elements larger than a number. 
const largerNums = (nums, pivot) => {
    return nums.filter(num => num > pivot);
};
console.log("Q19", largerNums([1,3,5,8,10], 8));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample   character   list:
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
// combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
// will count the number of occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o' 
// Expected output: 3 
const countOccurrences = (s, l) => {
    let res = 0;
    for (let c of s) {
        if (c === l) {
            res++;
        }
    }
    return res;
};
console.log("Q22", countOccurrences('microsoft.com', 'o'));

// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddbec' 
// Expected output: 'e' 
const firstNotRepeat = (s) => {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        (map.has(s[i])) ? map.set(s[i], Number.MAX_VALUE) : map.set(s[i], i); 
    }
    const sortedMap = new Map([...map.entries()].sort((a, b) => a[1] - b[1]));
    return (sortedMap.values().next().value !== Number.MAX_VALUE) ? sortedMap.keys().next().value : null;
};
console.log("Q23", firstNotRepeat('abacddbecf'));

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple
// sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing
// each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
};
console.log("Q24", bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

// 25. Write a JavaScript function that accept a list of country names as input and returns the
// longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"
const longestCountryName = (arr) => {
    let res = "";
    for (let name of arr) {
        if (name.length > res.length) {
            res = name;
        }
    }
    return res;
};
console.log("Q25", longestCountryName(["Australia", "Germany", "United States of America"]));

// 26. Write a JavaScript function to find longest substring in a given a string without repeating
// characters. 
const longestNonRepeat = (s) => {
    const map = new Map();
    let left = 0;
    let res = "";
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i]) && map.get(s[i]) >= left) {
            left = map.get(s[i]) + 1;
        } else if (i - left + 1 > res.length){
            res = s.substring(left, i + 1);
        }
        map.set(s[i], i);
    }
    return res;
};
console.log("Q26", longestNonRepeat("abcabcbcd"));

// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest
// symmetric factor problem is the problem of finding a maximum-length contiguous substring of a
// given string that is also a palindrome. For example, the longest palindromic substring of
// "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for
// example, in the string "abracadabra", there is no palindromic substring with length greater than
// three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all
// substrings that are themselves palindromes and cannot be extended to larger palindromic
// substrings) rather than returning only one substring or returning the maximum length of a
// palindromic substring.
// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
const myAddition = (callback) => {
    return callback(2, 4);
}
const myCallback = (a, b) => {
    return a + b;
}
console.log("Q28", myAddition(myCallback));

// 29. Write a JavaScript function to get the function name
const foo = () => {
    return foo.name;
}
console.log("Q29", foo());