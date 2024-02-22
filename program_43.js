"use strict";
/*
* Unchanged Magicians: Start with your work from Exercise 40.
* Call the function make_great() with a copy of the array of magicians’ names.
* Because the original array will be unchanged, return the new array and store it in a separate array.
* Call show_magicians() with each array to show that you have one array of the original
* names and one array with the Great added to each magician’s name.
*/
const magician2 = ["Harry Potter", "Dumbledore", "Snape", "Weasley"];
const greatMagician = makeGreat2([...magician2]);
function showMagician2(magician2) {
    for (let magicians of magician2) {
        console.log(`- ${magicians}`);
    }
}
function makeGreat2(magician2) {
    const modifiedMagician = [];
    for (let i = 0; i < magician2.length; i++) {
        modifiedMagician.push("The Great" + " " + magician2[i]);
    }
    return modifiedMagician;
}
console.log("Harry Potter Movie Magicians \n");
console.log("Original Magician Names:");
showMagician2(magician2);
console.log("\n Great Magician Names:");
showMagician2(greatMagician);
