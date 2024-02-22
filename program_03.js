"use strict";
/*
* Name Cases: Store a person’s name in a variable,
* and then print that person’s name in
* lowercase, uppercase, and titlecase
*/
// Let a variable and assign it a name
var fullName = "HUZAIFA ahmed";
// Convert fullName into Lower Case
console.log(`Convert to Lower Case: ${fullName.toLowerCase()}`);
// Convert full Name to Upper Case
console.log(`Convert to Upper Case ${fullName.toUpperCase()}`);
// Convert fullName into Title Case
let titleCase = fullName.split(" ") // Split the full name into an array of words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
    .join(" "); // Join the words back into a single string with spaces between them
console.log(titleCase);
