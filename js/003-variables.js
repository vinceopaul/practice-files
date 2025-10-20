// *Variables Test

let age = 12;

console.log(age);
age = 54;
console.log(`New age: ${age}`);
//
const name = "Hi";
try {
  name = "Hello"; //TypeError
} catch (error) {
  console.log(`Error: ${error.message}`);
}
console.log(name);
//
console.log(3 + 2 - 76 * (1 + 1)); //-147
console.log(23 + 97); //120
console.log(23 + 97 + 21 + 43 + 33 + 5); ///222
console.log((4 + 6 + 9) / 77); //0.2467...
//
let a = 10;
console.log(a);
a = 11;
console.log(a); //11

let b = 7 * a;
console.log(b); //77
//
const max = 57;
actual = max - 13;
percentage = actual / max;
console.log(`Percentage: ${percentage}`);

// let let = 5; //SyntaxError;
