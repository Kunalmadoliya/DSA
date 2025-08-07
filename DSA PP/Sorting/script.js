// selection sort

// let i = 0;

// while (i < arr.length) {
//   let maxIndex = i;
//   let j = i + 1;

//   while( j < arr.length ){
//     if(arr[j] < arr[maxIndex]){
//         maxIndex = j
//     }
//     j++
//   }

//   let temp = arr[i]
//   arr[i] = arr[maxIndex]
//   arr[maxIndex] = temp

//   i++
// }

// console.log(arr);

// bubble sort

// for (let i = arr.length - 1; i >= 1; i--) {
//   let didSwap = 0;
//   for (let j = 0; j <= i - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//       didSwap = 1;
//     }
//   }

//   if (didSwap === 0) {
//     break;
//   }
// }
// console.log(arr);

// let arr = [9, 12, 6, 14];

// for (let i = 0; i < arr.length; i++) {
//   let j = i;

//   while (j > 0 && arr[j - 1] > arr[j]) {
//     let temp = arr[j];
//     arr[j] = arr[j - 1];
//     arr[j - 1] = temp;
//     j--;
//   }
// }
// console.log(arr);

// function mergeSort(arr, low, high) {
// if (low >= high) return;

// let mid = Math.floor((low + high) / 2);
// mergeSort(arr, low, mid);
// mergeSort(arr, mid + 1, high);
// merge(arr, low, mid, high);
// }

// function merge(arr, low, mid, high) {
// let left = low,
//    right = mid + 1,
//    temp = [];

// while (left <= mid && right <= high) {
//  if (arr[left] < arr[right]) {
//    temp.push(arr[left++]);
//  } else {
//    temp.push(arr[right++]);
//  }
// }

// while (left <= mid) {
//  temp.push(arr[left++]);
// }

// while (right <= high) {
//  temp.push(arr[right++]);
// }

// for (let i = low; i <= high; i++) {
//  arr[i] = temp[i - low];
// }
// }

// mergeSort(arr, 0, arr.length - 1);
// console.log(arr)




// quickSort(arr, 0, arr.length - 1);
// console.log(arr); 

// function quickSort(arr, first, last) {
//   if (first >= last) return;

//   let pIndex = findIndex(arr, first, last);
//   quickSort(arr, first, pIndex - 1);
//   quickSort(arr, pIndex + 1, last);
// }

// function findIndex(arr, first, last) {
//   let pivot = arr[last];
//   let i = first - 1;

//   for (let j = first; j < last; j++) {
//     if (arr[j] < pivot) {
//       i++;
//       swap(arr, i, j);
//     }
//   }

//   swap(arr, i + 1, last); 
//   return i + 1;           // Return pivot index
// }

// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

let arr = [38, 27, 43, 3, 9, 82, 10];

let i = 0 , j = arr.length - 1

while( i <= j){
  let temp = arr[i]
  arr[i]  = arr[j]
  arr[j] = temp
  i++ 
  j--
}
console.log(arr);
