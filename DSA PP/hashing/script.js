let arr = [1, 2, 3, 1, 4, 5, 6, 3, 2, 4, 4, 6, 1, 8, 2];

// let store = []

// const freq = new Map();

// for (let num of arr) {
//   freq.set(num, (freq.get(num) || 0) + 1);
// }

// for( let pair of freq ){
//  store.push([pair[0] , pair[1]])
// }

// console.log(store);

let max = -Infinity;
let smax = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    smax = max;
    max = arr[i];
  } else if (arr[i] > smax && arr[i] !== max) {
    smax = arr[i];
  }
}

console.log(max);
console.log(smax);

// let str = "anikashdaisnmasda";
// let freq = new Map();

// for (let i = 0; i < str.length; i++) {
//   let ch = str[i];

//     freq.set(ch, (freq.get(ch) || 0) + 1)
// }

// console.log(freq);
