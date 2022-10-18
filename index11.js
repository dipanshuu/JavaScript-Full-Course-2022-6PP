// function sum(a, b) {
//   const result = a + b;
//   displaySum(result);
// }
// function displaySum(result) {
//   const h1 = document.querySelector("h1");
//   h1.innerText = result;
// }
// sum(20, 30);

// function sum(a, b, c) {
//   const result = a + b;
//   c(result);
// }
// function displaySum(result) {
//   const h1 = document.querySelector("h1");
//   h1.innerText = result;
// }
// sum(20, 30, displaySum);

// function sum(a, b, c) {
//   const result = a + b;
//   c(result);
// }
// function displaySum(result) {
//   const h1 = document.querySelector("h1");
//   h1.innerText = result;
// }
// sum(20, 30, displaySum);
// sum(20, 130, alert);

//Callback function is one which is itself a function and take function as an argument is called callback function

// const arr = [1, 2, 3];
// arr.forEach(() => {});

//forEach is a Higher Order function as it take function as parameter

// const arr = [1, 2, 3, 4, 5, 6];
// function calculatorMultipleTen(arr = []) {
//   const ans = [];
//   for (let i = 0; i < arr.length; i++) {
//     ans.push(arr[i] * 10);
//   }
//   console.log(ans);
// }

// function calculatorDivideTen(arr = []) {
//   const ans = [];
//   for (let i = 0; i < arr.length; i++) {
//     ans.push(arr[i] / 10);
//   }
//   console.log(ans);
// }
// calculatorMultipleTen(arr);
// calculatorDivideTen(arr);

// const arr = [1, 2, 3, 4, 5, 6];
// function calculatorMultipleTen(arr = [], callback) {
//   const ans = [];
//   for (let i = 0; i < arr.length; i++) {
//     const element = callback(arr[i]);
//     arr.push(element);
//   }
//   console.log(ans);
// }

// function multiply(a) {
//   return a * 10;
// }

// calculatorMultipleTen(arr, multiply);
// console.log("Hey");

// calculator(arr, (a) => a * 10);
// calculator(arr, (a) => a / 10);
const gamesList = [];
const fetchData = (callback) => {
  setTimeout(
    (callback) => {
      gamesList.push(
        {
          name: "game 1",
          id: "xsdasdsda",
        },
        {
          name: "game 2",
          id: "csdsddasdsda",
        },
        {
          name: "game 3",
          id: "zsdasddsda",
        }
      );
      // callback();
      console.log(gamesList);
    },
    4000,
    callback
  );
};

const displayGame = () => {
  setTimeout(() => {
    for (let i = 0; i < gamesList.length; i++) {
      const p = document.createElement("p");
      p.innerText = gamesList[i].name;
      document.body.append(p);
    }
    console.log("Consolelog after fetching");
  }, 1000);
};
fetchData(displayGame);

fetchData();
