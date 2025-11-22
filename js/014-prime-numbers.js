//Prime Numbers

//const askNum = +prompt("Input a max number for prime numbers");
let n = 50;
// for (let i = 2; i <= n; i++) {
//   if (i > 2 && i % 2 == 0) continue;
//   let isPrime = true;
//   for (let j = 2; j <= Math.sqrt(i); j++) {
//     if (j > 2 && j % 2 === 0) continue;
//     if (i % j == 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) console.log(i);
// }

//Another take
for (i = 2; i <= n; i++) {
  // Handle 2, not important
  if (i === 2) {
    console.log(i);
    continue;
  }
  // Skip even numbers
  if (i % 2 === 0) continue;
  // Assume i is prime until proven otherwise
  let isPrime = true;
  // Compute the integer square root boundary
  const limit = Math.floor(Math.sqrt(i));
  // Primality test (Odd numbers)
  // Start inner loop by 3 and increment by 2
  for (let j = 3; j <= limit; j += 2) {
    // console.log(`i = ${i}, j = ${j}, limit= ${limit}`);
    // Check divisibility
    // Mark as not Prime if divisible, and then break the loop.
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  //If it is prime, then show it.
  if (isPrime) console.log(i);
}
