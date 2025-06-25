// -----------Accept value from user and assign in the array with sum
// ---------------------

// var prompt = require("prompt-sync")();

// var n = Number(prompt("Enter size :- "));

// let arr = new Array(n);
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = Number(prompt("Enter elements:-"));
//   sum += arr[i];
// }

// console.log(arr);
// console.log(sum);

// ------------------------Max element from array-------------------------------

// let arr = [1, 2, 3, 4, 5, 7, 8, 2, 4, 5, 6, 9];

// let max = Math.max(arr[0], arr[1]);
// let smax = Math.min(arr[0], arr[1]);

// for( let i = 0 ; i < arr.length ; i++){
//     if( arr[i] > max){
//         max = arr[i]
//     }
// }
// console.log(max);

// -------------------Second max element from array-----------------

// for (let i = 2; i < arr.length; i++) {
//   if (max < arr[i]) {
//     smax = max;
//     max = arr[i];
//   } else if (arr[i] > smax) {
//     smax = arr[i];
//   }
// }
// console.log(smax);

// ---------------------Reverse the array------------------------------------

// let i = 0;
// let j = arr.length - 1;

// while (j > i) {
//   [arr[i], arr[j]] = [arr[j], arr[i]];
//   i++;
//   j--;
// }
// console.log(arr);

// --------------All zeroes to left and all ones to right-------------------------

// let arr = [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0];

// let j = 0; 

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 0) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     j++;
//   }
// }

// console.log(arr);


// --------------------Array left Rotation by 1----------------------------------

// let arr = [ 1,2,3,4]
// let j = arr.length - 1
// let temp = arr[0]
// for( let i = 0 ; i < arr.length - 1 ; i++ ){
//     arr[i] = arr[i + 1]
// }

// arr[arr.length - 1] = temp

// console.log(arr);
