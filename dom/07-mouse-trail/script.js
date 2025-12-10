const createDiv = (numOfTrail, classVal) => {
  const newDivs = [];
  for (let i = 0; i < numOfTrail; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = classVal;
    newDivs.push(newDiv);
  }
  return newDivs;
};

function addTrail(numOfTrail, classVal, spacing, offsetX, offsetY) {
  const divArr = createDiv(numOfTrail, classVal);

  let counter = 0;
  let eventCount = 0;

  window.addEventListener("mousemove", (event) => {
    eventCount++;

    if (eventCount % spacing !== 0) return;

    divArr[counter].style.left = event.pageX + offsetX + "px";
    divArr[counter].style.top = event.pageY + offsetY + "px";

    document.body.appendChild(divArr[counter]); // add node once the cursor moves (Lazy loading)

    counter = (counter + 1) % divArr.length;
  });
}

const numOfDivTrail = 15;
const cssClass = "trail";
// move every 6 mouse events
const spacing = 6;
// pos to the cursor pointer
const offsetX = 9;
const offsetY = 9;

addTrail(numOfDivTrail, cssClass, spacing, offsetX, offsetY);
