import { assertEquals } from "./test-framework.js";
import { addBagel } from "./index.js";

// Use the assertEquals function with 2 values
// console.log(assertEquals(true, false));

//* Tests come in 3 parts (usually)
//* We power our test with a TRIPLE A Battery:

//? Add bagel in array length of 0 test
// Arrange

 const basketArrayOne = [];
 let bagelName = 'Plain';
 let expected = 'Plain';
let actual, result;

// Act
actual = addBagel(bagelName,basketArrayOne); //* Call the unit under test

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test result: ${result}`);


//? Add bagel in array length of 'n' test
// Arrange

 const basketArrayTwo = ['plain','cheese'];
 bagelName = 'egg';
 expected = bagelName;

// Act
actual = addBagel(bagelName,basketArrayTwo); //* Call the unit under test

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test result: ${result}`);







