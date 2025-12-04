//? Use  e.stopPropagation(); in the handler to check how the method and event model works

window.document.addEventListener(
  "click",
  (e) => {
    console.log("window cap");
  },
  true
);
window.document.addEventListener(
  "click",
  (e) => {
    console.log("window bub");
    e.stopPropagation();
  },
  false
);

document.documentElement.addEventListener(
  "click",
  (e) => {
    console.log("root cap");
  },
  true
);
document.documentElement.addEventListener(
  "click",
  (e) => {
    console.log("root bub");
  },
  false
);

document.body.addEventListener(
  "click",
  (e) => {
    console.log("body cap");
  },
  true
);
document.body.addEventListener(
  "click",
  (e) => {
    console.log("body bub");
  },
  false
);

const div = document.querySelector("#container");

div.addEventListener(
  "click",
  (e) => {
    console.log("div cap");
  },
  true
);
div.addEventListener(
  "click",
  (e) => {
    console.log("div bub");
  },
  false
);

const btn = document.querySelector("#btn");
btn.addEventListener(
  "click",
  (e) => {
    console.log("button cap");
  },
  true
);
btn.addEventListener(
  "click",
  (e) => {
    console.log("===BUBBLING===");
    console.log("button bub");
  },
  false
);
