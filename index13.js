// const url = "https://catfact.ninja/fact";
// const fetchData = () => {
//   fetch(url)
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// };
// fetchData();

// const url = "https://catfact.ninja/fact";
// console.log("a");
// const fetchData = () => {
//   fetch(url)
//     .then((response) => {
//       console.log("then 1");
//       return response.json();
//     })
//     .then((data) => {
//       console.log("then 2");
//       console.log(data);
//     });
// };
// fetchData();
// console.log("z");

// const url = "https://catfact.ninja/fact";
// const h1 = document.querySelector("h1");
// const fetchData = () => {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => (h1.innerText = data.fact))
//     .catch((e) => console.log(e))
//     .finally(() => console.log("all done"));
// };

// fetchData();

// const url = "https://catfact.ninja/fact";
// const h1 = document.querySelector("h1");
// const fetchData = async () => {
//   const response = await fetch(url);
//   const data = await response.json();
//   h1.innerText = data.fact;
// };
// fetchData();

// console.log("a");
// setTimeout(() => {
//   console.log("timeout");
// }, 0);
// Promise.resolve().then(() => console.log("Promise"));
// console.log("z");

// console.log("a");
// const fetchData = async () => {
//   console.log("f1");
//   const response = await fetch(url);
//   console.log("f2");
//   const data = await response.json();
//   console.log("f3");
//   h1.innerText = data.fact;
//   console.log("f4");
// };

// fetchData();
// console.log("z");

// const url = "https://catfact.ninja/fact";
// const h1 = document.querySelector("h1");
// const fetchData = async () => {
//   const response = await fetch(url);
//   const data = await response.json();
//   h1.innerText = data.fact;
// };
// fetchData().catch((e) => {
//   console.log(e);
// });
// fetchData();
// const url = "https://catfact.ninja/fact";
// const h1 = document.querySelector("h1");
// const fetchData = async () => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     throw "meri marzi";
//     h1.innerText = data.fact;
//     // throw "meri marzi";
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Final One");
//   }
// };
// fetchData();

// const e = new Error("Cleadasd");
// e.name = "hehe";
// console.log(e);
