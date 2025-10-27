//Function declaration
function sum(n1, n2) {
  return n1 + n2;
}

//named function expression
let multiply = function mult(num1, num2) {
  return num1 * num2;
};

//anonymous function expression
let division = function (num1, num2) {
  return num1 / num2;
};

alert(sum(3, 5));
alert(multiply(3, 5));
alert(division(10, 3));

//Basic Arrow Function Test
let ask = (question, yes, no) => (confirm(question) ? yes() : no());

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);

//Power of a number
function pow(x, n) {
  let result = x;
  for (i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

let a = prompt("x?");
if (isNaN(+a)) alert("Not a Number");
else {
  let b = prompt("n?");
  if (isNaN(+b)) alert("Not a Number");
  else if (+b <= 0) {
    alert(`Power ${b} is not supported, use a positive integer`);
  } else {
    alert(pow(a, b));
  }
}
