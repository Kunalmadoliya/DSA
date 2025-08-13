// let arr = [1,7,7,7,7,7,7,7,7,7,7];

const {log} = require("node:console");

// let greatest = -Infinity

// for( let i = 0 ; i < arr.length ; i++){
//     if ( arr[i] < arr[i+ 1]){
//         greatest= arr[i+ 1]
//     }
// }
// console.log(greatest);

// let arr = [1, 2, 4, 7, 4, 21, 5];

// let max = -Infinity;
// let smax = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     smax = max;
//     max = arr[i];
//   } else if (arr[i] > smax && arr[i] !== max) {
//     smax = arr[i];
//   }
// }

// console.log(max, smax); // 21 7

// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// let i = 1,
//   j = nums.length - 1;
// while (i <= j) {
//   if (nums[i] === nums[i - 1]) {
//     nums[i] = nums[j];
//     i++;
//     j--;
//     console.log(i);
//   }
// }.

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let k = 3;

// let temp = arr[0];
// for (let i = 1; i < k; i++) {
//   arr[i] = arr[i - 1];
// }
// arr[arr.length - 1] = temp;
// console.log(arr);

// unioun

// let arr1 = [1, 1, 2, 3, 4, 4, 5];
// let arr2 = [2, 2, 3, 4, 5, 5, 6, 7];

// let union = [];

// let i = 0,
//   j = 0;

// while (i < arr1.length && j < arr2.length) {
//   if (arr1[i] < arr2[j]) {
//     if (union.at(-1) !== arr1[i]) union.push(arr1[i]);
//     i++;
//   } else {
//     if (union.at(-1) !== arr2[j]) union.push(arr2[j]);
//     j++;
//   }
// }

// while (i < arr1.length) {
//   if (union.at(-1) !== arr1[i]) union.push(arr1[i]);
//   i++;
// }

// while (j < arr2.length) {
//   if (union.at(-1) !== arr2[j]) union.push(arr2[j]);
//   j++;
// }

// console.log(union);

// let arr1 = [1, 1, 2, 3, 4, 4, 5];
// let arr2 = [2, 2, 3, 4, 5, 5, 6, 7];

// let intersect = [];

// let i = 0, j = 0;

// while (i < arr1.length && j < arr2.length) {
//   if (arr1[i] === arr2[j]) {
//     if (intersect.length === 0 || intersect.at(-1) !== arr1[i]) {
//       intersect.push(arr1[i]);
//     }
//     i++;
//     j++;
//   }
//   else if (arr1[i] < arr2[j]) {
//     i++;
//   }
//   else {
//     j++;
//   }
// }

// console.log(intersect);

// let nums = [0, 1];
// nums.sort();

// for (let i = 0; i < nums.length; i++) {

//   if (i === nums[i]) {
//     console.log(nums.length);
//   }else{
//     console.log(i);

//   }
// }

// let n = nums.length
// let sum = nums.reduce((a, b) => a+ b, 0)
// let b = ( n * (n + 1)/2)

// console.log(b- sum)

// let nums = [1, 1, 0, 1, 1, 1, 0, 1, 1];

// let max = 0;
// let count = 0;

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] === 1) {
//     count++;
//   } else {
//     count = 0;
//   }

//   if (max < count) {
//     max = count;
//   }
// }

// console.log(max);

let nums = [1, 2, 1, 2, 4];

// for (let i = 0; i < nums.length; i++) {
//   let num = nums[i];
//   let count = 0;
//   for (let j = 0; j < nums.length; j++) {
//     if (nums[j] === num) {
//       count++;
//     }
//   }

//   if (count === 1) {
//     console.log(num);
//   }
// }

// b

// let map = new Map();
// let count = 0;
// for (let i = 0; i < nums.length; i++) {
//   if (map.has(nums[i])) {
//     count++;
//   } else {
//     count = 1;

//     console.log(nums[i]);
//   }
// }

let num = 27;
let base = 3;

let power = Math.log(num) / Math.log(base);
let roundedPower = Math.round(power);

console.log(roundedPower); // 3
console.log(Math.pow(base, roundedPower) === num); // true
