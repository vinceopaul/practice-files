const cats = ["Pete", "Biggles", "Jasmine"];
let myFavoriteCats = "My cats are called ";

for (let i = 0; i < cats.length; i++) {
  myFavoriteCats += i !== cats.length - 1 ? `${cats[i]}, ` : `and ${cats[i]}.`;
}

console.log(myFavoriteCats);
// My cats are called Pete, Biggles, and Jasmine.

myFavoriteCats = "My cats are called ";
let counter = 0;
while (counter < cats.length) {
  myFavoriteCats +=
    counter !== cats.length - 1
      ? `${cats[counter]}, `
      : `and ${cats[counter]}.`;
  counter++;
}

console.log(myFavoriteCats);
// My cats are called Pete, Biggles, and Jasmine.

myFavoriteCats = "My cats are called ";
let i = 0;
do {
  myFavoriteCats += i !== cats.length - 1 ? `${cats[i]}, ` : `and ${cats[i]}.`;
  i++;
} while (i < cats.length);

console.log(myFavoriteCats);
// My cats are called Pete, Biggles, and Jasmine.

//MDN
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

// loop starts here
for (let peep of people) {
  peep === "Phil" || peep === "Lola"
    ? (refused.textContent += `${peep}, `)
    : (admitted.textContent += `${peep}, `);
}

refused.textContent = `${refused.textContent.slice(0, -2)}.`;
admitted.textContent = `${admitted.textContent.slice(0, -2)}.`;
