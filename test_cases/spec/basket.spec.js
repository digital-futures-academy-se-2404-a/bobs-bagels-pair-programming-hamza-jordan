import { basket } from "../src/basket.js";
import { assertEquals } from "./test-framework/test-framework.js";

//? TEST 1
//* Add item to basket using addItem and expect array (basketItems) has increased in length by 1

// Arrange

let expected = basket.items.length + 1;
let actual, result;

// Act
basket.addBagel();
actual = basket.items.length ;

// Assert

result = assertEquals(actual, expected); 

// Report

console.log('Test 1');
console.log('===========');
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log('===========');

//? TEST 2
//* Test that item passed to addItem is actually added to the basket




























// //* Tests come in 3 parts (usually)
// //* We power our test with a TRIPLE A Battery:

// //? Add bagel in array length of 0 test
// // Arrange

//  const basketArrayOne = [];
//  let bagelName = 'Plain';
//  let expected = 'Plain';
// let actual, result;

// // Act
// actual = addBagel(bagelName,basketArrayOne); //* Call the unit under test

// // Assert
// result = assertEquals(actual, expected);

// // Report
// console.log("Add bagel in array length of 0 test");
// console.log(`Test result: ${result}\n`);


// //? Add bagel in array length of 'n' test
// // Arrange

//  const basketArrayTwo = ['plain','cheese'];
//  bagelName = 'egg';
//  expected = bagelName;

// // Act
// actual = addBagel(bagelName,basketArrayTwo); //* Call the unit under test

// // Assert
// result = assertEquals(actual, expected);

// // Report
// console.log("Add bagel in array length of 'n' test");
// console.log(`Test result: ${result}\n`);


// //? Remove bagel from basket where bagel is within basket

// // Arrange
//  const basketArrayThree = ['plain','cheese'];
//  bagelName = 'plain';
//  expected = bagelName;

// // Act
// actual = removeBagel(bagelName,basketArrayTwo); //* Call the unit under test

// // Assert
// result = assertEquals(actual, expected);

// // Report
// console.log("Remove bagel from basket where bagel is within basket");
// console.log(`Test result: ${result}\n`);




