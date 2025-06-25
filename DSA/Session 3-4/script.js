// --------------Accept two numbers and print the greatest between them----------------

// let a = Number(prompt("Enter a :- "));
// let b = Number(prompt("Enter b :- "));

// if (a > b) {
//   console.log("a is greater");
// } else {
//   console.log("b is greater");
// }

// -------------Accept an integer and check whether it is an even number or odd-------------

// let n = Number(prompt("Enter a number :- "));

// if (n % 2 === 0) {
//   console.log("Yes it is even");
// } else {
//   console.log("no");
// }

// -----------Accept name and age from the user. Check if the user is a valid voter or not-----------------------------------------------

// let n = Number(prompt("Enter age :- "));

// if(n <= 17 ){
//   console.log(" not a valid votes");
// }else{
//     console.log("You can vote");

// }

// --------------------Accept three numbers and print the greatest among them---------------------

// let a = Number(prompt("Enter a :- "));
// let b = Number(prompt("Enter b :- "));
// let c = Number(prompt("Enter c :- "));

// if (a > b && a > c) {
//   console.log(" a is bigger");
// } else if (b > a && b > c) {
//   console.log(" b is bigger");
// } else {
//   console.log("c is bigger");
// }

// ---------------------Accept a year and check if it a leap year or not (google to find out what's a
// leap year)-----------------------------------

let year = Number(prompt("Enter year:-"));

if ((year % 4 === 0 && year % 100 === 0) || year % 400 === 0) {
  console.log("leap year");
} else {
  console.log("not a leap year");
}
