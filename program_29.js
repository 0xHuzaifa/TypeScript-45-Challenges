"use strict";
/*
* Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
* if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array.
* If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/
// Create an array of favorite fruits
const favoriteFruits = ['bananas', 'apples', 'oranges'];
// Check for certain fruits in the array
let fruitToCheck = 'bananas'; // The fruit we want to check for
if (favoriteFruits.includes(fruitToCheck)) {
    console.log(`You really like ${fruitToCheck}!`);
}
fruitToCheck = 'apples';
if (favoriteFruits.includes(fruitToCheck)) {
    console.log(`You really like ${fruitToCheck}!`);
}
else {
    console.log(`${fruitToCheck}! is not your favorite fruit`);
}
fruitToCheck = 'oranges';
if (favoriteFruits.includes(fruitToCheck)) {
    console.log(`You really like ${fruitToCheck}!`);
}
else {
    console.log(`${fruitToCheck}! is not your favorite fruit`);
}
fruitToCheck = 'grapes';
if (favoriteFruits.includes(fruitToCheck)) {
    console.log(`You really like ${fruitToCheck}!`);
}
else {
    console.log(`${fruitToCheck}! is not your favorite fruit`);
}
fruitToCheck = 'mangoes';
if (favoriteFruits.includes(fruitToCheck)) {
    console.log(`You really like ${fruitToCheck}!`);
}
else {
    console.log(`${fruitToCheck}! is not your favorite fruit`);
}
