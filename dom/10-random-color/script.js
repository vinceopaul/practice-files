const randomizeRGBColor = (min = 1, max = 256) =>
  Array.from({ length: 3 }, () =>
    Math.floor(Math.random() * (max - min) + min)
  );

function changeBg() {
  const [r, g, b] = randomizeRGBColor();

  const div = document.querySelector("div");
  div.style.backgroundColor = `rgb(${r},${g},${b})`;
}

const btn = document.querySelector("button");
btn.addEventListener("click", changeBg);
