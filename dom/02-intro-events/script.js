// 2
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");
// 3
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  alert("Hello World");
});

/* Named Function


   Method 1:
*/
function alertFunction() {
  alert("YAY! YOU DID IT!");
}
//2 & 3
const btn3 = document.querySelector("#btn3");
// METHOD 2
btn3.onclick = alertFunction;

// METHOD 3
btn3.addEventListener("click", alertFunction);

btn3.addEventListener("click", function (e) {
  console.log(e);
});

//Event object
const btn4 = document.querySelector("#btn4");

btn4.addEventListener("click", function (e) {
  console.log(e.target);
});

btn4.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

//For group of buttons
const buttons = document.querySelectorAll("#container > button");

buttons.forEach((button) => {
  button.addEventListener("dblclick", () => {
    alert(button.id);
  });
});
