// --Q 83. 88. Merge Sorted Array

// let arr1 =[1,5,6] , arr2 = [8,9,7,56,2]

// let i = 0 , j = 0
// while( i <= arr1.length && j <= arr2.length){
//     if(arr1[i] <= arr2[j]){
//         j++
//     }if( arr1[i] >= arr2[j]){
//         arr1.push(arr2[j])
//         i++
//         j++
//     }

// }
// console.log(arr1);

// let arr = [0,0,1,1,1,2,2,3,3,4]

// let j = 1 , i = 0

// while( i < arr.length - 1){
//     if( arr[i] === arr[i+1]){
//         i++
//     }else{
//         arr[j] = arr[i++]
//         j++
//         i++
//     }
// }

// console.log(arr[j]);

// 1089. Duplicate Zeros

// let arr = [1,0,2,3,0,4,5,0]
// let i = 0
//    while( i < arr.length - 1 ){
//     if(arr[i] === 0){
//         arr[i+ 1] = 0
//         i++
//     }
// }
// console.log(arr);

// 283. Move Zeroes

// let arr = [1,0,1,3,0,6]

// let i = 0 , j = i + 1

// while ( i < arr.length - 1){
//     if(arr[j] === 0){
//         j++
//     }
//     if( arr[i] == 0){
//         [arr[i] , arr[j]] = [ arr[j] , arr[i]]
//         i++
//         j++
//     }
// }
// console.log(arr);

// --Q 87. 53. Maximum Subarray / Kadane's Algo

// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// let sum = 0;
// let maxSum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
//   if (sum > maxSum) {
//     maxSum = sum;
// }
// if (sum < 0) {
//   sum = 0;
// }
// }
// console.log(maxSum);

// let arr = [3, 2, 3];
// let map = new Map();
// let max = 0

// for (let i = 0; i < arr.length; i++) {
//   if (map.has(arr[i])) {
//     map.set(arr[i], map.get(arr[i]) + 1);
//   } else {
//     map.set(arr[i], 1);
//   }
// }

// for (const [key,value] of map) {
//    if(value > max){
//       max = key
//    }

// }

// console.log(max);

// console.log(map);

// 121. Best Time to Buy and Sell Stock

// let arr = [7, 1, 5, 3, 6, 4];
// let small = arr[0];
// let max = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (small > arr[i]) {
//     small = arr[i];
//   }
//   for (let i = arr[small]; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
// }

// let profit = max - small;

// console.log(profit);

let nums = [2, 0, 2, 1, 1, 0];
let i = 0,
  j = 0,
  k = nums.length - 1;

while ( i <= k) {
  if (nums[i] === 0) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j++;
  } else if (nums[i] === 2) {
    [nums[i], nums[k]] = [nums[k] , nums[i]];
    k--;
  } else {
    i++;
  }
}

console.log(nums);
