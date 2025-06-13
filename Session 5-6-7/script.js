// -----------------Accept an integer and Print hello world n times------------

// const n = Number(prompt("Enter a number:-"));

// for(let i = 0 ; i <= n ; i++){
//     console.log("hello");

// }

// ----------------------Print natural number up to n------------------

// for(let i = 0 ; i <= n ; i++){
//    console.log(i);

// }

// ---------------------- Reverse for loop. Print n to 1-------------------

// for(let i = n ; i >= 0 ; i-- ){
//     console.log(i);

// }

// -----------------Take a number as input and print its table----------------

// for (let i = 1; i <= 10; i++) {
//   console.log(n * i);
// }

// ----------------------Sum up to n terms----------------------
// let sum = 1;
// for (let i = 0; i <= n; i++) {
//   sum = sum + i
// }

// console.log(sum);

// ---------------------Factorial of a number---------------------

//  for (let i = 1; i <= n; i++) {
//   sum = sum * i

// }

// console.log(sum);

// ------------------Check if the number is Prime or not----------------------

//   for ( let i = 2 ; i <= Math.sqrt(n) ;i++ ){
//     if(n % i ===0){
//         console.log("not prime");
//     }else console.log("prime");
//   }

//  --------------Write a program to take two inputs a, b & find the value of a raised to the------------------------------
// power of b

// const a = Number(prompt("Enter a number:-"));
// const b = Number(prompt("Enter b number:-"));

// const power = Math.pow(a , b)
// console.log(power);

// --------------------------sum of digit--------------------------

// let n = 123;
// let sum = 0 ;
// while (n > 0) {
//   let digit = n % 10;
//    sum = sum + digit;

//   n = Math.floor(n / 10);
// }

// console.log(sum);

// -------------------------reverse of number---------------------------

// let n = 123;
// let sum = 0 ;
// while (n > 0) {
//   let digit = n % 10;
//    sum = sum * 10 + digit;

//   n = Math.floor(n / 10);
// }

// console.log(sum);

// --------------------------strong number--------------------------------

// let n = Number(prompt("Enter a number:-"));
// let fact = 1;
// let sum = 0;
// while (n > 0) {
//   let digit = n % 10;
//   for (let i = 1; i <= digit; i++) {
//     fact = i * fact;
//   }
//   sum = sum + fact;

//   n = Math.floor(n / 10);
// }

// if (sum === n) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

//------------------------ Automorphic number------------------------------------


let n = Number(prompt("Enter a number:-"))
let copy = n 
let square = Math.pow(n , 2)
let count = 0;
while(n > 0){
count++
n = Math.floor(n/10)
}

let digit = Math.floor(square % Math.pow(10, count))

if(copy === digit){
    console.log("yes");
    
}else{
    console.log("no");
    
}
