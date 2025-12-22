const h1 = document.querySelector("h1");

let timer;
document.addEventListener("mousedown", function () {
  timer = setTimeout(function () {
    // press and hold logic
    h1.textContent = "holding";
  }, 100);
});

document.addEventListener("mouseup", function () {
  clearTimeout(timer);
  h1.textContent = "unhold";
});
