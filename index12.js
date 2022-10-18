// const a = new Promise((resolve, reject) => {
//   resolve("Promise Fulfilled");
// });
// a.then((parameter) => {
//   console.log(parameter);
// });

// const a = new Promise((resolve, reject) => {
//   let success = false;
//   if (success) resolve("Promise Fulfilled");
//   else reject("Some Technical Error");
// });
// a.then(
//   (parameter) => {
//     console.log(parameter);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// a.then((parameter) => {
//   console.log(parameter);
// }).catch((error) => {
//   console.log(error);
// });
//catch is for rejection

const arr = [];
const fetchData = (arr = []) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      arr.push({ name: "abhi" });
      if (arr.length > 0) resolve("Data Fetched");
      else reject("Some technical error");
    }, 2000);
  });
};
// fetchData(arr)
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((message) => {
//     console.log(message);
//   });

// fetchData(arr)
//   .then((message) => console.log(message))
//   .catch((message) => console.log(message))
//   .finally(() => console.log("Will work either"));

fetchData(arr)
  .then((message) => console.log(message))
  .then(() => console.log(2))
  .then(() => console.log(3))
  .catch((message) => console.log(message))
  .finally(() => console.log("Will work either"));
