        //1 
        //Function to reverse Number.
        function reverseNum(n) {
            let r = n.toString().split('').reverse().join('');
            return Math.sign(n) * parseInt(r);
        }
        reverseNum(32243);
        console.log(reverseNum(32243));

        //2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
        //A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
        //madam or nurses run.

        function checkPalindrome(str) {
            const len = string.length;
            for (let i = 0; i < len / 2; i++) {
                if (string[i] !== string[len - 1 - i]) {
                    return 'It is not a palindrome';
                }
            }
            return 'It is a palindrome';
        }
        //3. Write a JavaScript function that generates all combinations of a string. 
        function myFunction(str1) {
            var array1 = [];
            for (var x = 0, y = 1; x < str1.length; x++, y++) {
                array1[x] = str1.substring(x, y);
            }
            var combi = [];
            var temp = "";
            var slent = Math.pow(2, array1.length);

            for (var i = 0; i < slent; i++) {
                temp = "";
                for (var j = 0; j < array1.length; j++) {
                    if ((i & Math.pow(2, j))) {
                        temp += array1[j];
                    }
                }
                if (temp !== "") {
                    combi.push(temp);
                }
            }
            console.log(combi.join("\n"));
        }

        substrings("dog");

        //44. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
        //Example string: 'webmaster' 

        function alpha(input) {
            return input.split('').sort().join('');
        }

        //5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
        //each word of the string in upper case.

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        //6. Write a JavaScript function that accepts a string as a parameter and find the longest word
        //within the string.
        function find_longest_word(str) {
            var array1 = str.match(/\w[a-z]{0,}/gi);
            var result = array1[0];

            for (var x = 1; x < array1.length; x++) {
                if (result.length < array1[x].length) {
                    result = array1[x];
                }
            }
            return result;
        }
        //7. Write a JavaScript function that accepts a string as a parameter and counts the number of
        //vowels within the string.

        function myFunction(str1) {
            var vowel_list = 'aeiouAEIOU';
            var vcount = 0;

            for (var x = 0; x < str1.length; x++) {
                if (vowel_list.indexOf(str1[x]) !== -1) {
                    vcount += 1;
                }

            }
            return vcount;
        }
        //8. Write a JavaScript function that accepts a number as a parameter and check the number is
        //prime or not.
        function test_prime(n) {

            if (n === 1) {
                return false;
            }
            else if (n === 2) {
                return true;
            } else {
                for (var x = 2; x < n; x++) {
                    if (n % x === 0) {
                        return false;
                    }
                }
                return true;
            }
        }
        //9. Write a JavaScript function which accepts an argument and returns the type. 
        //Note: There are six possible values that typeof returns: object, boolean, function, number, string,
        //and undefined.
        function myFunction(input) {
            return typeof (input);
        }
        //10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
        function myFunction(input) {
            let arr = []
            for (let i = 0; i < input; i++) {
                let zero = '0'
                let temp = zero.repeat(input);
                let tempArr = temp.split('');
                tempArr[i] = '1';
                arr.push(tempArr);
            }
            return arr;
        }

        // 11. Write a JavaScript function which will take an array of numbers stored and find the second
        //lowest and second greatest numbers, respectively

        function myFunction(arr) {
            arr.sort(function (x, y) {
                return x - y;
            });
            var uniqa = [arr[0]];
            var result = [];

            for (var j = 1; j < arr.length; j++) {
                if (arr[j - 1] !== arr[j]) {
                    uniqa.push(arr[j]);
                }
            }
            result.push(uniqa[1], uniqa[uniqa.length - 2]);
            return result.join(',');
        }
        //12  Write a JavaScript function which says whether a number is perfect.
        function myFunction(num) {
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
        // 13 Write a JavaScript function to compute the factors of a positive integer.
        function myFunction(n) {
            var factors = [], i;

            for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
                if (n % i === 0) {
                    factors.push(i);
                    if (n / i !== i)
                        factors.push(n / i);
                }
            factors.sort(function (x, y) {
                return x - y;
            });
            return factors;
        }
        //14. Write a JavaScript function to convert an amount to coins. 
        function myFunction(input, coins) {
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
        //15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
        //bases. Accept b and n from the user and display the result.
        function myFunction(b, n) {
            var ans = 1;
            for (var i = 1; i <= n; i++) {
                ans = b * ans;
            }
            return ans;
        }
        //16. Write a JavaScript function to extract unique characters from a string. 
        function myFunction(arr1) {
            var arr = arr1;
            var uniql = "";
            for (var x = 0; x < arr.length; x++) {

                if (uniql.indexOf(arr.charAt(x)) == -1) {
                    uniql += arr[x];

                }
            }
            return uniql;
        }
        //17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
        function myFunction(string) {
            let string1 = string.split("").sort().join("");
            let counter = 0;
            for (let i = 0; i < string.length; i++) {
                if (string1[i] == string[i + 1]) {
                    counter++;
                } else {
                    console.log(string1[i] + " " + counter);
                    counter = 0;
                }
            }
        }
        //18. Write a function for searching JavaScript arrays with a binary search. 
        //Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds
        //the desired value.
        function myFunction(items, value) {
            var firstIndex = 0,
                lastIndex = items.length - 1,
                middleIndex = Math.floor((lastIndex + firstIndex) / 2);

            while (items[middleIndex] != value && firstIndex < lastIndex) {
                if (value < items[middleIndex]) {
                    lastIndex = middleIndex - 1;
                }
                else if (value > items[middleIndex]) {
                    firstIndex = middleIndex + 1;
                }
                middleIndex = Math.floor((lastIndex + firstIndex) / 2);
            }

            return (items[middleIndex] != value) ? -1 : middleIndex;
        }
        //19. Write a JavaScript function that returns array elements larger than a number. 
        function myFunction(val) {
            return function (evalue, index, array) {
                return (evalue >= val);
            };
        }
        //20. Write a JavaScript function that generates a string id (specified length) of random characters.
        Sample
        function myFunction(l) {
            var text = "";
            var char_item = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (var i = 0; i < l; i++) {
                text += char_item.charAt(Math.floor(Math.random() * char_item.length));
            }
            return text;
        }
        //21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
        //combinations in an array.

        function myFunction(arr, arr1) {
            var result_set = [],
                result;
            for (var x = 0; x < Math.pow(2, arr.length); x++) {
                result = [];
                i = arr.length - 1;
                do {
                    if ((x & (1 << i)) !== 0) {
                        result.push(arr[i]);
                    }
                } while (i--);

                if (result.length >= arr1) {
                    result_set.push(result);
                }
            }

            return result_set;
        }
        //22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
        //will count the number of occurrences of the specified letter within the string. 

        function myFunction(str, letter) {
            var letter_Count = 0;
            for (var position = 0; position < str.length; position++) {
                if (str.charAt(position) == letter) {
                    letter_Count += 1;
                }
            }
            return letter_Count;
        }


        //23 .Write a JavaScript function to find the first not repeated character.


        function myFunction(str) {
            for (let i = 0; i < str.length; i++) {
                let j = str.charAt(i)
                if (str.indexOf(j) == str.lastIndexOf(j)) {
                    return j;
                }
            }
            return null;
        }

        //24 .Write a JavaScript function to apply Bubble Sort algorithm.

        function myFunction(a) {
            var swapp;
            var n = a.length - 1;
            var x = a;
            do {
                swapp = false;
                for (var i = 0; i < n; i++) {
                    if (x[i] < x[i + 1]) {
                        var temp = x[i];
                        x[i] = x[i + 1];
                        x[i + 1] = temp;
                        swapp = true;
                    }
                }
                n--;
            } while (swapp);
            return x;
        }
        //25 .Write a JavaScript function that accept a list of country names as input and returns the
        //longest country name as output. 

        function myFunction(country_name) {
            return country_name.reduce(function (name, country) {
                return name.length > country.length ? name : country;
            },
                "");
        }
        //26 .Write a JavaScript function to find longest substring in a given a string without repeating
        //characters.
        function myFunction(input) {
            var chars = input.split('');
            var curr_char;
            var str = "";
            var longest_string = "";
            var hash = {};
            for (var i = 0; i < chars.length; i++) {
                curr_char = chars[i];
                if (!hash[chars[i]]) {
                    str += curr_char;
                    hash[chars[i]] = { index: i };
                }
                else {
                    if (longest_string.length <= str.length) {
                        longest_string = str;
                    }
                    var prev_dupeIndex = hash[curr_char].index;
                    var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
                    str = str_FromPrevDupe + curr_char;
                    hash = {};
                    for (var j = prev_dupeIndex + 1; j <= i; j++) {
                        hash[input.charAt(j)] = { index: j };
                    }
                }
            }
            return longest_string.length > str.length ? longest_string : str;
        }

        //27 .Write a JavaScript function that returns the longest palindrome in a given string. 
        function myFunction(str1) {
            var rev = str1.split("").reverse().join("");
            return str1 == rev;
        }

        function longest_palindrome(str1) {

            var max_length = 0,
                maxp = '';

            for (var i = 0; i < str1.length; i++) {
                var subs = str1.substr(i, str1.length);

                for (var j = subs.length; j >= 0; j--) {
                    var sub_subs_str = subs.substr(0, j);
                    if (sub_subs_str.length <= 1)
                        continue;

                    if (myFunction(sub_subs_str)) {
                        if (sub_subs_str.length > max_length) {
                            max_length = sub_subs_str.length;
                            maxp = sub_subs_str;
                        }
                    }
                }
            }
            return maxp;
        }
        //28 .Write a JavaScript program to pass a 'JavaScript function' as parameter.
        function myFunction(id, refreshCallback) {
            refreshCallback();
        }
        function refreshStudentList() {
            console.log('Hello');
        }
        addStudent(1, refreshStudentList);
        //29 .Write a JavaScript function to get the function name. 

        function abc() {
            console.log(arguments.callee.name);
        }

        abc();