// —Q 73.Print hello n times

// temp(n);

// function temp(n) {
//   if (n === 0) return;

//   console.log("hello");

//   temp(n - 1);
// }

// —Q 74.Print natural number 1-n / n-1

// const n = 10;

// function temp(n) {
//   if (n == 0) return;
//   process.stdout.write(n + " ");

//   temp(n - 1);
// }
// console.log(temp(n));

// function temp(n) {
//   if(n === 0) return;
//   temp(n - 1);
//   console.log(n);
// }
// console.log(temp(n));

// —Q 75.Factorial / Sum

let n = 5

function fact(n) {
  if (n == 1) return 1 ;
  return  n * fact(n - 1);
}
console.log(fact(n));
