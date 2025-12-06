const ul = document.querySelector("ul");

const input = document.querySelector("#item");

const addBtn = document.querySelector("button");
addBtn.addEventListener("click", submitInput);

function submitInput(event) {
  event.preventDefault();

  const inputValue = input.value;

  addItem(inputValue);

  input.value = "";
  input.focus();
}

const addSpan = (valInput) => {
  const span = document.createElement("span");
  const inputVal = valInput;
  span.textContent = inputVal;

  return span;
};

const addDeleteBtn = () => {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  return deleteBtn;
};

function addItem(valInput) {
  const listItem = document.createElement("li");
  const span = addSpan(valInput);
  const deleteBtn = addDeleteBtn();

  listItem.append(span, deleteBtn);

  ul.appendChild(listItem);

  // attach delete listener
  deleteBtn.addEventListener("click", () => listItem.remove());
}
