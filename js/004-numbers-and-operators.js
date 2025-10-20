let num1 = 4,
  num2 = "4";
console.log(num1 == num2);

//
"" + 1 + 0; //"10"
"" - 1 + 0; //-1
true + false; //1
6 / "3"; // 2
"2" * "3"; // 6
4 + 5 + "px"; //"9px"
"$" + 4 + 5; //"$45"
"4" - 2; //2
"4px" - 2; // NaN
"  -9  " + 5; // " -9  5"
"  -9  " - 5; // -14 (spaces are trimmed during coercion)
null + 1; // NaN
undefined + 1; //NaN
" \t \n" - 2; // -2

//Exponent
let a = 123e6;
let a1 = 123e-6;
console.log(`${a}, ${a1}`); // 123000000, 0.000123
//* Java are 64-bit floating-point (double precision floating-point) Real numbers
//* Integer Precision up to 15 digits (use bigInt instead)
let a2 = 999999999999999; // 999999999999999
let a3 = 9999999999999999; //10000000000000000

//*Floating Precision (multiply and divide)
let a4 = 0.5,
  a5 = 0.3;
console.log((a4 * 10 + a5 * 10) / 10); // 0.8

//* Number Strings (-,/,*) will try to convert and do operation,
//* `+` will concat string and numbers (left to right)
console.log("100" - 10); // 90
console.log("100" + 10); // 10010
console.log(50 + 20 + "10"); //7010
//
console.log(100 / "hello"); //NaN Not a Number
console.log(typeof NaN); //number
console.log(typeof undefined); //undefined

//
console.log(100 / 0); // Infinity (calculate outside largest possible number)
console.log(-100 / 0); //Infinity
console.log(typeof Infinity); //number

//* Hexadecimals (0x)
console.log(0xff); //255

//* JS displays numbers as base 10, use toString() method to output different base
let a6 = 12;
console.log(a6.toString(10)); //12

//*Comparing objects ALWAYS returns false. Also, do not create numbers as objects
console.log(new Number(100) == new Number(100)); //false
console.log(new Number(100) === new Number(100)); //false
