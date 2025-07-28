// function printNums(l, u) {
//   if (l > u) {
//     return;
//   }
//   console.log(l);
//   printNums(l + 1, u);
// }
// printNums(1, 5);

// let sum = 0 , n = 5

// for( let i = 0 ; i <= n ; i++){
//     sum += i
// }
// console.log(sum);

// let sum = 0;

// function addSum(n) {
//   if (n <= 0) return 0;
//   return n + addSum(n - 1);
// }

// console.log(addSum(5));

// let str = "hello"

// for( let i = str.length - 1 ; i >= 0 ; i--){
//      console.log(str[i]);

// }

// let rev = " "

// function revStr( str , i = str.length - 1){
//     if( i >= 0){
//         rev += str[i]
//         revStr( str , i - 1)
//     }
// }

// revStr("hello")
// console.log(rev);

// let fact = 1
// let n = 5

// for( let i = 1 ; i <= n ; i++ ){
//     fact = fact * i
// }
// console.log(fact); 

function fact(n) {
 if( n <= 1){
    return 1
 } 
 return n * fact(n - 1)
}
console.log(fact(3));
