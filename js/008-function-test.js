//Function that adds 7
function add7(a) {
  return a + 7;
}

// alert(add7(10)); //17

//Multiply
function multiply(a, b) {
  return a * b;
}

// alert(multiply(3, 2)); // 6

//Capitalize
function capitalize2(string) {
  const firstChar = string.at(0).toUpperCase();
  const restOfChars = string.substring(1).toLowerCase();
  return firstChar + restOfChars;
}

function capitalize1(string) {
  const word = string.toLowerCase().split("");
  word[0] = word.at(0).toUpperCase();
  return word.join("");
}

function capitalize(string) {
  const getChar = string.slice(0, 1).toUpperCase();
  const word = string.slice(1, string.length).toLowerCase();
  return getChar.concat("", word);
}

let letters = ["abcd", "ABCD", "aBcD"];

for (let letter of letters) {
  console.log(capitalize2(letter));
}

//Last Letter
function lastLetter(string) {
  return string.at(-1);
}

console.log(lastLetter("abcd"));
