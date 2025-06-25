const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let rightsum = 0 , leftsum = 0
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if(i === j ) rightsum += arr[i][j]
    if(i + j == arr.length - 1 ) leftsum += arr[i][j]
  }
}

console.log(rightsum);
console.log(leftsum);