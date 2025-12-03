const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const pTag = document.createElement("p");
pTag.style.color = "red";
pTag.textContent = "Hey, I'm red!";

container.appendChild(pTag);

const hThree = document.createElement("h3");
hThree.style.color = "blue";
hThree.textContent = "I'm blue h3!";

container.appendChild(hThree);

const anotherContent = document.createElement("div");
anotherContent.style.border = "3px solid red";
anotherContent.style.backgroundColor = "pink";

const anotherHOne = document.createElement("h1");
anotherHOne.textContent = "I'm in a div";

anotherContent.appendChild(anotherHOne);

const anotherPTag = document.createElement("p");
anotherPTag.textContent = "ME TOO!";

anotherContent.appendChild(anotherPTag);

container.appendChild(anotherContent);
