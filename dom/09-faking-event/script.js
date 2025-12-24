const myCell = document.getElementById("myCell");

// Function that normally expects an event object
function highlightCell(event) {
  console.log("Event currentTarget:", event.currentTarget);
  event.currentTarget.style.backgroundColor = "yellow";
}

// Real event: browser fires it automatically
myCell.addEventListener("click", highlightCell);

// Manual call using a “fake event”
highlightCell({ currentTarget: myCell });
