let arr = [1, 2, 3, 1, 4, 5, 6, 3, 2, 4, 4, 6, 1, 8, 2];



const freq = new Map();

for (let num of arr) {
  freq.set(num, (freq.get(num) || 0) + 1);
}

console.log(freq);