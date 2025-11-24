// 1
function example1() {
  // Create array
  const styles = ["Jazz", "Blues", "G"];
  console.log(styles);
  // Append
  styles.push("Rock-n-Roll");
  console.log(styles);
  // Replace value in the middle
  styles[Math.floor((styles.length - 1) / 2)] = "Classics";
  console.log(styles);
  console.log(Math.floor((styles.length - 1) / 2));
  // Remove first value
  styles.shift();
  console.log(styles);
  // Add values at the beginning (Prepend)
  styles.unshift("Rap", "Reggae");
  console.log(styles);
}
// example1();

// 2
/*
 * Sum input numbers
 * Asks the user for values using prompt and stores the values in the array.
 * Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
 * Calculates and returns the sum of array items.
 */

function sumInput() {
  const arr = [];
  do {
    let userInput = prompt("Input a numeric value", 0);
    const numInput = Number(userInput);
    if (userInput === null || userInput.trim() === "" || !isFinite(numInput)) {
      break;
    }
    arr.push(numInput);
  } while (true);
  console.log(arr);
  // let sum = 0;
  // arr.forEach((userInput) => (sum += userInput));

  let sum = arr.reduce((inputSum, userInput) => (inputSum += userInput), 0);
  return sum;
}
// alert(sumInput());

//3
// A maximal subarray
/*
 * The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].
 * The task is: find the contiguous subarray of arr with the maximal sum of items.
 * Write the function getMaxSubSum(arr) that will return that sum.
 */

/*
? Using O(n^2)
* 1. Slice at starting index
* 2. Expand slice
* 3. Track the running sum
* 4. Update max sum when appropriate

* [3, -2, 4]
* i = 0
* j=0: slice = [3], running sum = 3 -> max = 3
* j=1: slice = [3,-2], running sum = 1 -> max 3
* j=2: slice = [3,-2,4], running sum = 5 -> max = 5

* i = 1
* j=1: slice = [-2], ... = -2 -> max 5
* j=2: slice = [-2,4], ... = 2 -> max 5

* i = 2
* j=2: slice = [4], ... = 4 -> max 5

* max sum of items is 5

* Structure of the function:
* 1) Declare variable -> max sum
* 2) Outer loop -> reset running sum -> start at 1st item ->  move forward one at a time.
* 3) Inner loop -> expand the slice by -> append running sum from current outer item to each loop of inner item.
* 4) Inner loop -> update max sum, if appropriate.
* 5) Move outer loop -> next item until it ends. Then return max sum.

* Pseudocode, for all negative subarray to 0:
* FUNCTION getMaxSubSum(arr):
*   maxSum <- 0
*   FOR i FROM 0 TO array length -1 :
*     runningSum <- 0
*     FOR j FROM i TO array length - 1:
*       runningSum <- runningSum + arr[j]
*       IF runningSum > maxSum THEN
*         maxSUM <- runningSum
*       END IF
*     END FOR
*   END FOR
*   RETURN maxSum

* (Researched) For picking up negative subarray in all negatives:
* maxSum <- 0 TO
* maxSum <- arr[0] / maxSum <- -Infinity
* Use Math.max() for assigning highest val

*/

function getMaxSubSum(arrItems) {
  let maxSum = 0;

  for (let i = 0; i < arrItems.length; i++) {
    let runningSum = 0;
    for (let j = i; j < arrItems.length; j++) {
      runningSum += arrItems[j];
      if (runningSum > maxSum) {
        maxSum = runningSum;
      }
    }
  }

  return maxSum;
}
const arr = [
  [-1, 2, 3, -9],
  [2, -1, 2, 3, -9],
  [-1, 2, 3, -9, 11],
  [-2, -1, 1, 2],
  [100, -9, 2, -3, 5],
  [1, 2, 3],
  [-1, -2, -3],
  [-5, -2, -9],
];
console.log("Maximum subarray O(n^2), and 0: ");

for (let arrItem of arr) {
  console.log(getMaxSubSum(arrItem));
  // 5, 6, 11, 3, 100, 6, 0, 0
  // 5, 6, 11, 3, 100, 6, -1, -2
}

/*
? Using O(n)
* 1) Maintain runningSum.
* 2) If runningSum is negative -> start fresh to the next item
* 3) Track maximum sum in maxSum.

* Question
* Where to update runningSum?
* When to reset to zero
* What do you initialize both variables to?
  maxSum <- 0/-Inf, runningSum <- 0
* How to handle all-negatives items


* 1) Initialize maxSum to 0 or first item/-Infinity
* 2) Initialize runningSum to 0;
* 3) Loop: Initialize candidate <- sum of runningSum & current item
* 4) Start runningSum <- get large number between current item & candidate.
* 5) Update maxSum <- compare runningSum and maxSum. Loop End
* 6) Return maxSum
*
* [3, -2, 4]
* i = 0;
* candidate <- 0 + 3 = 3, runningSum <- max(3 , 3) = 3
* maxSum <- max(3, 3) = 3;
* i = 1;
* candidate <- 3 -2 = 1, runningSum <- max(-2, 1) = 1
* i = 2;
* candidate <- 1 + 4 = 5, runningSum <- max(4, 5) = 5
* return maxSum = 5;
*
*/

function getMaxSubSum_1(arr) {
  let maxSum = 0;
  let runningSum = 0;

  for (let i = 0; i < arr.length; i++) {
    const candidate = runningSum + arr[i];
    runningSum = Math.max(arr[i], candidate);
    maxSum = Math.max(maxSum, runningSum);
  }

  // ?  For of version
  // for (let item of arr) {
  //   const candidate = runningSum + item;
  //   runningSum = Math.max(item, candidate);
  //   maxSum = Math.max(maxSum, runningSum);
  // }

  return maxSum;
}
console.log("Maximum subarray O(n), and 0: ");

for (let arrItem of arr) {
  console.log(getMaxSubSum_1(arrItem));
  // 5, 6, 11, 3, 100, 6, 0, 0
  // 5, 6, 11, 3, 100, 6, -1, -2
}
