// —Introduction of String
// —methods of string

const {log} = require("console");

//  Q 55. Accept a string from user and print its each character on a new line

// var prompt = require('prompt-sync')();

// var str = prompt('Enter a name:- ');

// for( let i = 0 ; i < str.length ;i++ ){
//     console.log(str[i]);

// }

// — Q 56. Accept a string and print it in reverse order

// let str = "kunal"

// for( let i = str.length - 1 ; i>= 0 ; i--){
//     console.log(str[i]);

// }

// — Q 57. Pallindromic String using Two pointer algorithm (hint: Array reverse algo)

// let arr = str.split("")
// let i = 0 , j = arr.length - 1
// while( i < j ){

//  [arr[i] , arr[j]] = [arr[j] , arr[i]]
//  i++
//  j--

// }
// let newstr = arr.join("")

// if(newstr === str)console.log("yes");
// else console.log("No")

// — Q 58. Toggle each alphabet of String
// In - AcgDfD Output - aCGdFd

// let str = "AcgDfD"
// let newStr = ""

// for( let i = 0 ; i < str.length ; i++){
//     if(str.charCodeAt(i) > 97 && str.charCodeAt(i) <= 122){
//       newStr += str[i].toUpperCase()
//     }else if( str.charCodeAt(i) > 64 && str.charCodeAt(i) <=91){
//         newStr += str[i].toLowerCase()
//     }else{
//         newStr += str
//     }
// }
// console.log(newStr);

// — Q 59. Take an array of strings words and a String Prefix. Print the number of
// strings
// in words that contain pref as a prefix.
// Example - Input: words = ["pay","attention","practice","attend"], pref = "at"
// Output: 2

// let arr =  ["pay","attention","practice","attend"]
// let count = 0
// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i].includes("at")){
//         count++
//         console.log(arr[i]);
//     }

// }

// console.log(count);

// Ex - Hello bhai Kaise ho a
// HellO BhaI KaisE HO A

// let str =  "Hello bhai Kaise ho a"
// let arr = str.split(" ")
// let newArr = ""

// for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i].length <= 2 ){
//        newArr += arr[i].toUpperCase() + " "
//     }else if(arr[i].length > 2 ){
//         newArr+= arr[i].charAt(0).toUpperCase() + arr[i].substring(1 , arr[i].length - 1 ) + arr[i].charAt(arr[i].length - 1).toUpperCase() + " "

//     }else{
//         newArr += arr + " "
//     }
// }

// console.log(newArr);

// Q 61.- Accept a string and print the frequency of each character
// present in the string

// let str = "hhhhheeeellloooooooo";

// let arr = str.split("");
// let count = 1;
// let result = "";

// for (let i = 1; i <= arr.length; i++) {
//   if (arr[i] == arr[i - 1]) {
//     count++;
//   } else {
//     result += arr[i - 1] + count + " ";
//     count = 1;
//   }
// }
// console.log(result);

// — Q 62. Check Two Strings are Anagram or Not
// Anagrams words have the same word length & same character count
// Examples of anagram words are arc and car, state and taste,
// night and thing etc.

// let s1 = "STate";
// let s2 = "TasTE";

// s1 = s1.toLowerCase();
// s2 = s2.toLowerCase();

// if (s1.length !== s2.length) {
//   console.log(false);
// } else {
//   let sorted1 = s1.split("").sort().join("");
//   let sorted2 = s2.split("").sort().join("");

//   if (sorted1 === sorted2) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
