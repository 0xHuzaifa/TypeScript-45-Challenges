"use strict";
/*
* More Conditional Tests: You don’t have to limit the number of tests you create to 10.
* If you want to try more comparisons, write more tests.
* Have at least one True and one False result for each of the following:

* • Tests for equality and inequality with strings

* • Tests using the lower case function

* • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

* • Tests using "and" and "or" operators

* • Test whether an item is in a array

* • Test whether an item is not in a array
*/
// Tests for Equality and Inequality with Strings
let string1 = "hello";
let string2 = "world";
let string3 = "hello";
// Equality test
if (string1 === string3) {
    console.log("string1 and string3 are equal"); // This will be printed
}
else {
    console.log("string1 and string3 are not equal");
}
// Inequality test
if (string1 !== string2) {
    console.log("string1 and string2 are not equal"); // This will be printed
}
else {
    console.log("string1 and string2 are equal");
}
// Tests Using the Lower Case Function
let text2 = "HELLO WORLD";
let lowerCaseText = text2.toLowerCase();
if (lowerCaseText === "hello world") {
    console.log("The text is now in lower case"); // This will be printed
}
else {
    console.log("The text is not in lower case");
}
// Numerical Tests Involving Equality and Inequality, Greater Than and Less Than, 
// Greater Than or Equal To, and Less Than or Equal To
let num1 = 10;
let num2 = 20;
// Equality test
if (num1 === num2) {
    console.log("num1 and num2 are equal");
}
else {
    console.log("num1 and num2 are not equal"); // This will be printed
}
// Inequality test
if (num1 !== num2) {
    console.log("num1 and num2 are not equal"); // This will be printed
}
else {
    console.log("num1 and num2 are equal");
}
// Greater than test
if (num2 > num1) {
    console.log("num2 is greater than num1"); // This will be printed
}
else {
    console.log("num2 is not greater than num1");
}
// Less than test
if (num1 < num2) {
    console.log("num1 is less than num2"); // This will be printed
}
else {
    console.log("num1 is not less than num2");
}
// Greater than or equal to test
if (num2 >= num1) {
    console.log("num2 is greater than or equal to num1"); // This will be printed
}
else {
    console.log("num2 is not greater than or equal to num1");
}
// Less than or equal to test
if (num1 <= num2) {
    console.log("num1 is less than or equal to num2"); // This will be printed
}
else {
    console.log("num1 is not less than or equal to num2");
}
// Tests Using "and" and "or" Operators
let condition1 = true;
let condition2 = false;
// "and" operator test
if (condition1 && condition2) {
    console.log("Both conditions are true");
}
else {
    console.log("At least one condition is false"); // This will be printed
}
// "or" operator test
if (condition1 || condition2) {
    console.log("At least one condition is true"); // This will be printed
}
else {
    console.log("Both conditions are false");
}
// Test Whether an Item Is in an Array
let array = [1, 2, 3, 4, 5];
let item = 3;
if (array.includes(item)) {
    console.log("The item is in the array"); // This will be printed
}
else {
    console.log("The item is not in the array");
}
// Test Whether an Item Is Not in an Array
let array1 = [1, 2, 3, 4, 5];
let item1 = 6;
if (!array1.includes(item1)) {
    console.log("The item is not in the array"); // This will be printed
}
else {
    console.log("The item is in the array");
}
