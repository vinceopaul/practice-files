//* MDN Practice src: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Object_basics

const person = {
  name: {
    first: "Bob",
    last: "Smith",
  },
  age: 32,
  bio() {
    console.log(
      `${this.name["first"]} ${this.name["last"]} is ${this.age} years old.`
    );
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name["first"]}.`);
  },
};

const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;

function logProperty(propName, partName) {
  if (!partName) {
    console.log(person[propName]);
  }
  console.log(person[propName][partName]);
}

logProperty("name", "first");
// Bob
logProperty("name", "last");
// Smith
logProperty("age");
// 32

person.age = 45;
person["name"]["last"] = "Cratchit";

person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};

console.log(person.height);
