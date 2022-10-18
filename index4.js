// const myFunc = function (a, b) {
//   console.log(a + b);
// };
// myFunc(2, 3);

//Arrow Function:Just a way creating a function without using function keyword
// const myFunc = (a, b) => {
//   console.log(a * b);
// };
// myFunc(3, 6);
const arr = [2, 4, 6, 8, 10];
// const myFunc = (value, index) => {
//   if (value === 7) {
//     console.log("It exist");
//   }
// };
// arr.find(myFunc);
// const result = arr.filter((value, index) => {
//   if (value > 4) {
//     return value;
//   }
// });
// console.log(result);
//filter returns in the form of array
//find returns only one value

// const result = arr.every((value, index) => {
//   return value > 0;
// });
// const result = arr.some((value, index) => {
//   return value > 10;
// });
// console.log(result);
// for (const element of arr) {
//   console.log(element);
// }

// arr.forEach((value, index) => {
//   console.log(value);
// });
//These methods don't touch the original value of array
//forEach doen't return the arrays of value while map does
// const result = arr.map((value, index) => {
//   value = value + 20;
//   return value;
// });
// console.log(result);
// const result = arr.reduce((total, value, index) => {
//   return total;
// });
// console.log(result);
//reduce starts the iteration from 1st index
