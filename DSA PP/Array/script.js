// let arr = [1,7,7,7,7,7,7,7,7,7,7];

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

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

let i = 1,
  j = nums.length - 1;
while (i <= j) {
  if (nums[i] === nums[i - 1]) {
    nums[i] = nums[j];
    i++;
    j--;
    console.log(i);
  }
}
