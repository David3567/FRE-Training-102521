// JavaScript Assignment
// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output: 34223
function Q1(input) {
  return +(input + " ").split("").reverse().join("");
}

console.log(Q1(32243));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
// madam or nurses run.
function Q2(input) {
  for (let i = 0; i < input.length; i++) {
    const str = input.length - 1 - i;
    if (str <= i) {
      return true;
    }
    if (input[i] != input[str]) {
      return false;
    }
  }
}

console.log(Q2("madam")); // true because "madam" is a palindrome
console.log(Q2("apple")); // false because "apple" is not a palindrome
