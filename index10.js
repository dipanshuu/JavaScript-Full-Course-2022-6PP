//We can make asynchronous using callback,promise and async await
// function example2(name = "Abhi") {
//   setTimeout(() => {
//     for (let i = 0; i < 5000; i++) {
//       console.log(`${name}:${i}`);
//     }
//   }, 5000);
// }
// example2();
// alert("Lastline");
// console.log("LastLine");

setTimeout(() => {
  alert("Lastline");
}, 3000);
console.log("lastline");
