//Check The range  between
let age = 51;
if (age >= 14 && age <= 90) console.log("Age is between 14 and 90!");

//Check the range outside
let age1 = 14;
if (!(age1 >= 14 && age1 <= 90)) console.log("not between 14 and 90");
if (age1 < 14 || age1 > 90) console.log("not between 14 or 90");

//about "if"
if (-1 || 0) alert("first"); //-1, first truthy
if (-1 && 0) alert("second"); // 0, falsy
if (null || (-1 && 1)) alert("third"); // 1, truthy

//Check the login
let userRole = prompt("Who's there?");

if (userRole === null || userRole.trim() === "") {
  alert("Cancelled!");
} else if (userRole !== "Admin") {
  alert("I don't know you!");
} else {
  let askUserPW = prompt("Password?");
  const password = "TheMaster";

  switch (askUserPW) {
    default:
      alert("Wrong Password!");
      break;
    case "":
    case null:
      alert("Cancelled!");
      break;
    case password:
      alert("Welcome!");
      break;
  }
}

// The name of JavaScript
let javaScriptName = prompt('What is the "official" name of JavaScript?');

if (javaScriptName === "ECMAScript") alert("Right!");
else alert('You don\'t know? "ECMAScript"!');

// Show the sign
let num = prompt("Input a digit number");
console.log(typeof num);

if (num > 0) alert(1);
else if (num < 0) alert(-1);
else alert(0);

//Rewrite 'if' into "?"
let result = a + b < 4 ? "Below" : "Over";

//Rewrite 'if...else' into '?'
//! Note! Do not do this. Unreadable!

let login = prompt("H");
let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";
alert(message);

//Rewrite "if" into "switch"
let a = +prompt("a?");

switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert("2,3");
    break;
}
