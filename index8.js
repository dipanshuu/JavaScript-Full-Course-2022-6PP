// const printName = (name) => {
//   console.log(`Welcome ${name}`);
// };
// setTimeout(printName, 15000, "Deepanshu");

const btn = document.querySelector("button");
const printName = (name, income, gender) => {
  let a = gender;
  if (a) {
    a = "male";
  } else {
    a = "female";
  }
  console.log(`My name is ${name} and my income is $${income} and I am ${a}`);
};
const customTimeOut = setTimeout(printName, 3000, "Deepak", 12000, true);
btn.addEventListener("click", () => {
  clearTimeout(customTimeOut);
});
