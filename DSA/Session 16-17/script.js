// Check if the pangram or not

// let sentence = "bsdfhusfhoinflkmckzxckasdokjadwiovjcisadncas";
// sentence = sentence.toLowerCase();
// let set = new Set(sentence);

// if (set.length == 26) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// — Q 63.Jewels and Stones

// let jewels = "ABC";
// let stones = "abcABCabcABC";

// let set = new Set(jewels);
// let count = 0;
// for (let ch of stones) {
//   if (set.has(ch)) {
//     count++;
//   }
// }

// console.log(count);

// —Q 67.Two Sum

// let arr = [];

// for (let i = 0; i < nums.length; i++) {
//   for (let j = i + 1; j < nums.length; j++) {
//     if (nums[i] + nums[j] === target) {
//       arr.push(nums[i], nums[j]);
//     }
//   }
// }
// console.log(arr);

// let map = new Map();
// let arr = [];
// let nums = [13, 15, 2, 7, 11, 15];
// let target = 9;

// for (let i = 0; i < nums.length; i++) {
//   if (map.has(target - nums[i])) {
//     arr[0] = i;
//     arr[1] = map.get(target - nums[i]);
//   }else map.set(nums[i] , i)
// }

// console.log(arr);

let nums = "abccbaacz";

// let ans = [];
// for( let i = 0 ; i < s.length ; i++){
//     for( let j = i + 1 ; j < s.length ;j++){
//       if(s[i] == s[j]){
//         ans.push(s[i])
//       }else{
//         s[i] = je
//       }
//     }
// }
// console.log(ans);

let map = new Map();

let names = ["Mary", "John", "Emma"];
let heights = [180, 165, 170];

for (let i = 0; i < names.length; i++) {
  map.set(heights[i], names[i]);

  heights.sort((a, b) => b - a);
 
  if(map.has(heights))
  
}


console.log(map);
