const input = document.getElementById("myInput");
const btn = document.getElementById("myBtn");
const deleteBtn = document.getElementById("delete");
const btnClick = () => {
  sessionStorage.setItem("key1", input.value);
};
btn.addEventListener("click", btnClick);
deleteBtn.addEventListener("click", () => {
  sessionStorage.removeItem("key1");
});

//Session storage has its scope in the current tab
//Local Storage has its scope in all the tabs
if (sessionStorage.getItem("key1")) {
  alert(sessionStorage.getItem("key1"));
}
