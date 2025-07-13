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

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let sum = 0;
let maxSum = 0;

for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
  if (sum > maxSum) {
    maxSum = sum;
}
if (sum < 0) {
  sum = 0;
}
}
console.log(maxSum);
