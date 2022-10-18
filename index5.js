const heading = document.getElementById("heading");
const btn = document.getElementById("myBtn");
const box1 = document.getElementById("box1");
const input = document.querySelector("input");
btn.addEventListener("click", () => {
  box1.classList.add("classForDiv");
});
btn.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  btn.style.background = "purple";
});

box1.addEventListener("mouseover", () => {
  btn.style.transform = "scale(1.3)";
  heading.style.backgroundColor = "pink";
});
box1.addEventListener("mouseout", () => {
  heading.style.backgroundColor = "";
  btn.style.transform = "";
});
addEventListener("contextmenu", (e) => {
  e.preventDefault();
  btn.style.filter = "blur(10px)";
});
addEventListener("click", (e) => {
  console.log(e.clientX);
  console.log(e.clientY);
});
box1.addEventListener("dblclick", () => {
  document.body.style.backgroundColor = "rgb(50,50,50)";
});
input.addEventListener("change", (e) => {
  console.log("ch");
  console.log(e.target.value);
});
