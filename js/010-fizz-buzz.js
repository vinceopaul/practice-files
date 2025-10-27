/*
My Basic FizzBuzz
PROMPT:
1. Ask the user for a number higher than 1 using prompt dialog.
2. Convert the input from string to number and store it in a
   constant variable.

FOR LOOP:
3. REPEAT for each number from 1 up to the user's input number:
    IF current number is divisible by both 3 and 5, THEN
        LOG "FizzBuzz".
    ELSE IF current number is divisible by 3, THEN
        LOG "Fizz".
    ELSE IF current number is divisible by 5, THEN
        LOG "Buzz".
    ELSE
        LOG the current number.
    END IF
END FOR
*/

const askNum = parseInt(prompt("Input a number higher than 1"));

for (let i = 1; i <= askNum; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}
