//Check The range  between
let age = 51;
if (age >= 14 && age <= 90) console.log("Age is between 14 and 90!");

//Check the range outside
let age1 = 14;
if (!(age1 >= 14 && age1 <= 90)) console.log("not between 14 and 90");
if (age1 < 14 || age1 > 90) console.log("not between 14 or 90");

//about "if"
// if (-1 || 0) alert("first"); //-1, first truthy
// if (-1 && 0) alert("second"); // 0, falsy
// if (null || (-1 && 1)) alert("third"); // 1, truthy

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
