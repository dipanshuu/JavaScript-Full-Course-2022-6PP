// function printTheValue() {
//   let result = (23 * 10 + 23 * 10 + 23 * 10) / 10;
//   console.log(result);
// }
// printTheValue();

// function printTheValue(a, b, c) {
//   console.log(c);
//   let result = (a * 10 + b * 10 + c * 10) / 10;
//   console.log(result);
// }
// printTheValue(5, 45);

// let myFunc = function (a = 0, b = 0, c = 0) {
//   let result = (a * 10 + b * 10 + c * 10) / 10;
//   return result;
// };
// myFunc();
//If no value is passed then it take the initial value provided as params
// myFunc(10, 20, 20);
//No it will take the value as 10,20 and 20

// function intro(name = "Sample", channel = "Youtube") {
//   console.log(`My name is ${name} and channel is ${channel}`);
//   console.log(`My income is ${myFunc(10, 10, 10)}`);
// }
// intro("Deepanshu", "TechGig");

let arr = [1, 2, 3];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log(sum);

//const & let has a local scope but var have a global scope
