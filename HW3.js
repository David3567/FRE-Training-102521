/*1. Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output: 34223*/ 
function reverse(num){
    let numString;
    numString = num + "";
    return numString = numString.split("").reverse().join("");
}

console.log(reverse(123123123))
;

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
function palindrome(String) {
    
      for (let i = 0; i < String.length/2; i++){
          if (String[i]!== String[String.length - 1 - i]){
              return false;
              break
          }
      return true;
      }
  }
 console.log(palindrome("aba"));
// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d,do,dog,o,og,g 



 

  // 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function sort(String){
    return String.split("").sort().join("");
}

console.log(sort("exia"));


//5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '
function uppercase(String) {
    let array = String.split(" ");
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
    }
    return newArray.join(" ");
}

console.log(uppercase("applr pie"));


// 29. Write a JavaScript f//unction to get the function name. 
function asdw() {
    console.log(arguments.callee.name);
}

asdw();
