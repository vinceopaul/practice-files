const para = document.querySelector("p");

let balloonSize = 20;

para.style.fontSize = `${balloonSize}px`;

document.body.addEventListener("keydown", (event) => {
  event.preventDefault();
});

document.body.addEventListener("keydown", inflate);
document.body.addEventListener("keydown", deflate);

const balloonPop = new Event("pop");
document.addEventListener("pop", (event) => {
  para.textContent = "💥";
  document.body.removeEventListener("keydown", inflate);
  document.body.removeEventListener("keydown", deflate);
});

function inflate(event) {
  const balloonMaxSize = 200;

  if (event.key === "ArrowUp") {
    balloonSize *= 1.1; // 10% increase
    balloonSize = Math.round(balloonSize);
    if (balloonSize >= balloonMaxSize) {
      document.dispatchEvent(balloonPop);
    }
    console.log(balloonSize);
    para.style.fontSize = `${balloonSize}px`;
  }
}

function deflate(event) {
  const minSize = 20;
  const bigThreshold = 120;

  if (event.key === "ArrowDown" && balloonSize > minSize) {
    balloonSize > bigThreshold ? (balloonSize *= 0.8) : (balloonSize *= 0.9);
    balloonSize = Math.round(balloonSize);
    balloonSize = Math.max(balloonSize, minSize);
    para.style.fontSize = `${balloonSize}px`;
    console.log(balloonSize);
  }
}
