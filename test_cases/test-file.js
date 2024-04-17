import { assertEquals } from "./test-framework.js";
import { addBagel } from "./index.js";

// Use the assertEquals function with 2 values
// console.log(assertEquals(true, false));

// Write a test for a function to add 2 numbers
//? Function will be called addTwoNumbers

//* Tests come in 3 parts (usually)
//* We power our test with a TRIPLE A Battery:

// Arrange

const basketArray = [];
const bagelName = 'Plain';
const expected = 'Plain';
let actual, result;

// Act
actual = addBagel(bagelName); //* Call the unit under test

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test result: ${result}`);



