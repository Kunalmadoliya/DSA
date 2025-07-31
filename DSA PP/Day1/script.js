// Understand recursion by print something N times

const { log } = require("console")

// function print( n , count = 0){
//     if(count === n) return
//     console.log(count);
//     print(n, count + 1)

// }
// print(5)

// Print name N times using recursion

// function names(n){
//     if( n == 0 )return ;
//     console.log("kunal");
//     names( n - 1)

// }

// names(5)

// Print 1 to N using recursion

// function print( n ){
//     if ( n < 1) return
//     console.log(n);
//     print( n - 1)

// }
// print(5)

// Sum of first N numbers

// function add(n, i = 0, sum = 0) {
//   if (i > n) return console.log(sum);
//   sum += i;
//   add(5, i + 1 , sum);
// }

// add(5);

// function add(n) {
//  if( n <= 0) return 0
//  return n  + add( n - 1)
// }

// console.log(add(5));


// Factorial of N numbers


// function fact(n){
//     if( n <=0) return 1
//     return n * fact(n - 1)
// }

// console.log(fact(5));


// Reverse an array


function rev(arr, first = 0, last = arr.length - 1) {
  if (first >= last) return;
  [arr[first], arr[last]] = [arr[last], arr[first]];
  rev(arr, first + 1, last - 1); 
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
rev(arr);
console.log(arr); 
