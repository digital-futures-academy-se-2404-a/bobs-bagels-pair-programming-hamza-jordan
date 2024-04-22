import Basket from "../src/basket.js";
import { assertEquals } from "./test-framework/test-framework.js";
import Bagel from "../src/bagels.js";
//? TEST 1
//* Add Bagel to basket using addBagel and expect basket to increase in length by 1

// After each test
const afterEach = () => {
    testBasket = null;
    testBagel = null;
    actual = null;
    expected = null;
}

// Arrange
let testBasket = new Basket();
let expected = 1;
let actual, result;

// Act
let testBagel = new Bagel("Test")
testBasket.addBagel(testBagel);
actual = testBasket.getBasket().length ;

// Assert

result = assertEquals(actual, expected); 

// Report

console.log('Test 1');
console.log('===========');
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log('===========');

afterEach();


//? TEST 2
//* Test that Bagel passed to addBagel is actually added to the basket

// Arrange
testBasket = new Basket();
expected = "Test";
actual, result;

// Act
testBagel = new Bagel("Test", 1)
testBasket.addBagel(testBagel);
actual = testBasket.getBasket()[0].getName(); 

// Assert

result = assertEquals(actual, expected); 

// Report

console.log('Test 2');
console.log('===========');
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log('===========');

afterEach();


//? Test 3 
//* Test if null is added to the basket

// Arrange
testBasket = new Basket();
expected = ["wrong answer"];

// Act
testBagel = new Bagel("Test", 1)
testBasket.addBagel(null);
// console.log('****');
// console.log(testBasket.getBasket());
// console.log('****');
actual = testBasket.getBasket(); 

// Report

console.log('Test 3');
console.log('===========');
console.log(result ? `Pass` : `Fail`);
console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log('===========');

afterEach();























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




