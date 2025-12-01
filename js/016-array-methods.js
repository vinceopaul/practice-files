const arr = [1, 2, 3, 4, 5];

const addOne = arr.map((item) => (item += 1));
// console.log(addOne);
//
const showOdd = arr.filter((item) => item % 2 !== 0);
// console.log(showOdd);
//
const productT = arr.reduce((product, item) => (product *= item), 1);
// console.log(productT);
//
let itemTProduct = 1;
arr.forEach((items) => (itemTProduct *= items));
// console.log(itemTProduct);

// Sum of Tripled Evens
function sumOfTripledEvens(array) {
  // let tripledEven = 0;
  // tripledEven = array
  //   .filter((num) => num % 2 === 0)
  //   .map((num) => num * 3)
  //   .reduce((sum, num) => sum + num, 0);
  // return tripledEven;
}
// console.log(sumOfTripledEvens([1, 2, 3, 4, 5]));

//* 1. Translate border-left-width to borderLeftWidth
/*
1. Split using separator "-"
2. Map each token:
    If first chunk is empty, skip, else lowercase.
    Then get the first character and slice the rest.
    Uppercase the first character and concat the slice
3. Join all the token into a single string
*/

function camelize(string) {
  const splittedString = string.split("-");
  let firstFound = false;
  return splittedString
    .map((token, index) => {
      if (token === "") return;
      return !firstFound && index === 0
        ? ((firstFound = true), token.toLowerCase())
        : token.at(0).toUpperCase() + token.slice(1).toLowerCase();
    })
    .join("");
}
const str = [
  "Background-color",
  "list-style-iMage",
  "-webkit-transition",
  "-Hello-World",
  "foo--bar",
  "--leading-and-trailing--",
  "----$---leading-and-trailing--",
];

for (let string of str) {
  console.log(camelize(string));
}

//* 2. Filter range (arr >= a || arr <= b)
function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}

let arrFilterRange = [5, 3, 8, 1];

let filtered = filterRange(arrFilterRange, 1, 4);

// console.log(filtered);
// console.log(arrFilterRange);

//* 3. Filter range "in place"
function filterRangeInPlace(arr, a, b) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
    }
  }
  // Forward Loop
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] < a || arr[i] > b) {
  //     arr.splice(i, 1);
  //     i--;
  //   }
  // }
}

let arrFilterRangeInPlace = [5, 3, 8, 1];

filterRangeInPlace(arrFilterRangeInPlace, 1, 4);

// console.log(arrFilterRangeInPlace);

//* 4. Sort in decreasing order
let arrToSort = [5, 2, 1, -10, 8];
/*
5 2 1 -10 8
2 5 1 -10 8
2 1 5 -10 8
1 2 5 -10 8
1 2 -10 5 8
1 -10 2 5 8
-10 1 2 5 8
*/
arrToSort.sort((a, b) => b - a);
// console.log(arrToSort);

//* 5. Copy and sort array copySorted()
function copySorted(arr) {
  return arr.toSorted(); // New ES2023
  // return arr.slice().sort(); // Old -> Copy then Sort
}

let arrToSortCopy = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arrToSortCopy);

// console.log(sorted);
// console.log(arrToSortCopy);

//* 6. Shuffle array element
/*
* FOR i FROM array length - 1 TO 0 (exclusive):
*   randomize <- random pick from 0 to i (inclusive)
*   j <- randomize
*   temp <- arr[i]
*   arr[i] <- arr[j]
*   arr[j] <- temp
* END FOR

*/

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

let toShuffle = [1, 2, 3];

// for (let i = 0; i < 3; i++) {
//   console.log(shuffle(toShuffle));
// }

//* 7. Filter unique array members
/*
1. Get item
2. Check if it exist in another collection. Discard if yes
3. Place it to another collection
4. Repeat
5. Return.
*/

function unique(arr) {
  let seenUniqueItems = [];

  for (let item of arr) {
    if (seenUniqueItems.indexOf(item) === -1) {
      seenUniqueItems.push(item);
    }
  }

  return seenUniqueItems;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

// console.log(unique(strings));
