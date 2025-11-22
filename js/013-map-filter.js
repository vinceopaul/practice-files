//November 06, 2025
const peoples = ["Jake", "Hanz", "Poy", "James"];

//Map
const upperPeople = peoples.map((people) => people.toUpperCase());
console.log(upperPeople);

//Filter
//Boolean, if true, pass return output
const filterJ = peoples.filter((people) => people.startsWith("J"));
console.log(filterJ); // Jake James

//MDN Loops practice
const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

const refusedPeepNames = ["Phil", "Lola"];

const refusedPeeps =
  people.filter((person) => refusedPeepNames.includes(person)).join(", ") + ".";
const admittedPeeps =
  people.filter((person) => !refusedPeepNames.includes(person)).join(", ") +
  ".";

refused.textContent += refusedPeeps;
admitted.textContent += admittedPeeps;
