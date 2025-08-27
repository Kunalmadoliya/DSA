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

// let nums = [1, 2, 1, 2, 4];

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

// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// let maxSum = -Infinity;
// let sum = 0;
// let start = 0;
// let ansStart = 0;
// let ansEnd = 0;

// for (let i = 0; i < nums.length; i++) {
//   sum += nums[i];

//   if (sum > maxSum) {
//     maxSum = sum;
//     ansStart = start;
//     ansEnd = i;
//   }

//   if (sum < 0) {
//     sum = 0;
//     start = i + 1;
//   }
// }

// console.log("Max Sum:", maxSum);
// console.log("Max Subarray:", nums.slice(ansStart, ansEnd + 1));

// let nums = [3, 1, -2, -5, 2, 9, -4, 8];

// let positive = [];
// let negative = [];

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] > 0) {
//     positive.push(nums[i]);
//   } else {
//     negative.push(nums[i]);
//   }
// }

// let p = 0,
//   n = 0;

// for (let i = 0; i < nums.length; i++) {
//   if (i % 2 === 0 && p < positive.length) {
//     nums[i] = positive[p++];
//   } else if (i % 2 === 1 && n < negative.length) {
//     nums[i] = negative[n++];
//   }
// }

// while (p < positive.length) {
//   nums.push(positive[p++]);
// }

// while (n < negative.length) {
//   nums.push(negative[n++]);
// }

// console.log(nums);

// let nums = [ 10,22,12,3,0,6]
// let max = []
// let maxNum = 0
// for( let i = nums.length - 1 ; i >= 0 ;i--){
//   if( nums[i] > maxNum){
//     max.push(maxNum)
//     maxNum = nums[i]
//   }
//   maxNum = Math.max( maxNum , nums[i])

// }

// console.log(max);

// let matrix = [
//   [0, 1, 2, 0],
//   [3, 4, 5, 2],
//   [1, 3, 1, 5],
// ];

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     if (matrix[i][j] === 0) {
//       markRow(i);
//       markCol(j);
//     }
//   }
// }
// function markRow(i) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     if (matrix[i][j] != 0) {
//       matrix[i][j] = -1;
//     }
//   }
// }

// function markCol(j) {
//   for (let i = 0; i < matrix.length; i++) {
//     if (matrix[i][j] != 0) {
//       matrix[i][j] = -1;
//     }
//   }
// }

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     if( matrix[i][j] === -1){
//       matrix[i][j] = 0
//     }
//   }
// }
// console.log(matrix);

let nums = [4, 3, 2, 7, 8, 2, 3, 1];
let arr= []

let i = 0;
while (i < nums.length) {
  let currentIdx = nums[i] -1;

  if ( nums[i] != nums[currentIdx]) {
    swap(nums, i, currentIdx);
  } else {
    i++;
  }
}

for( let j = 1 ; j < nums.length ; j++){
  if( j !== nums[j]){
    arr.push(j)
  }
}
function swap(nums, a, b) {
  let temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}

console.log(nums);
