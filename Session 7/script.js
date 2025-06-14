// // ----------------Right Angle Traingle-------------------

// var prompt = require("prompt-sync")();

// var n = Number(prompt("Enter a number:- "));

// for( let i = 1 ; i <= n ; i++){
//     for( let j = 1 ; j <= i ; j++){
//       process.stdout.write("* ")
//     }
//     console.log();

// }

// Q 36.

// for(let i = 1 ; i <= n ; i++){
//     for( let j = 1 ; j <= i ; j++){
//         process.stdout.write(j + " ")
//     }
//     console.log();

// }

// Q 37.

// for(let i = 0 ; i < n ; i++){
//     for( let j = 97 ; j <= 97 + i ; j++){
//         process.stdout.write(String.fromCharCode( j + " "))
//     }
//     console.log();

// }

// Q 38. Inverted Right Angle Triangle

// for (let i = n; i > 1; i--) {
//   for (let j = i; j > 1; j--) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// Q 39. mirror right angle traingle

// for (let i = 0; i < n; i++) {
//   for (let j = n - 1; j > i; j--) {
//     process.stdout.write(" ");
//   }
//   for (let k = 0; k <= i; k++) {
//     process.stdout.write("*");
//   }

//   console.log();
// }

// Q 40

// for( let i = 1 ; i <= n ; i++){
//     for( let j = 1 ; j  <= n - i; j++){
//         process.stdout.write(" ")
//     }
//     for(let k = 1 ;k <= i ;k++ ){
//         process.stdout.write("* ")
//     }
//     console.log();

// }

// Q 42

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (i == j || i + j == n + 1) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("  ");
//     }
//   }
//   console.log();
// }

// Q 41

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= 2 * n; j++) {
//     if (i == j || i + j == 2 * n) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("  ");
//     }
//   }
//   console.log();
// }
