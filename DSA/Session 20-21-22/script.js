// —Q 73.Print hello n times

// temp(n);

// function temp(n) {
//   if (n === 0) return;

//   console.log("hello");

//   temp(n - 1);
// }

// —Q 74.Print natural number 1-n / n-1

// const n = 10;

// function temp(n) {
//   if (n == 0) return;
//   process.stdout.write(n + " ");

//   temp(n - 1);
// }
// console.log(temp(n));

// function temp(n) {
//   if(n === 0) return;
//   temp(n - 1);
//   console.log(n);
// }
// console.log(temp(n));

// —Q 75.Factorial / Sum

// let n = 5

// function fact(n) {
//   if (n == 1) return 1 ;
//   return  n * fact(n - 1);
// }
// console.log(fact(n));

// sum of digit

// let n = 891;

// function SOD(n){
//   if( n < 10 )return n
//   return n%10 + SOD(Math.floor(n/10))
// }
// console.log(SOD(n));

// reverse the number

// function rev(n) {
//   if (n < 10) return n;
//   return (n % 10) * 10 + rev(Math.floor(n / 10));
// }

// console.log(rev(n));

// let n = 123465465

// let count = 0
// let sum = 0

// while(n > 0){
//   let digit = n % 10

//   count++
//   n = Math.floor( n /10)
// }

// console.log(count);

// let n = -45346532

// n = Math.abs(n)
// console.log(n);

// let n = "abba";
// let arr = n.split("");

// let rev = "";

// for (let i = arr.length - 1; i >= 0; i--) {
//   rev += arr[i];
// }

// if (rev === n) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// function printFibonacci(n) {
//   let a = 0, b = 1;

//   console.log("Fibonacci Series:");
//   for (let i = 0; i < n; i++) {
//     console.log(a);
//     let next = a + b;
//     a = b;
//     b = next;
//   }
// }

// printFibonacci(5
  
// ); // Prints first 10 Fibonacci numbe
let n = 2.10000 , p = 3

function myPow(n, p) {
   let result = rp( n , p)
   console.log(result.toFixed(5))
   
   if(n === 0)return 0
   if( p === 0 ){
    return p
   }
   return n * result(n , p - 1)
}


