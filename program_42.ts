/*
* Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() 
* that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
* Call show_magicians() to see that the list has actually been modified.
*/

const magician: string[] = ["Harry Potter", "Dumbledore", "Snape", "Weasley"];

function showMagician(magician: string[]): void {
    for (let magicians of magician) {
        console.log(`- ${magicians}`);
    }
}

console.log("Harry Potter Movie Magicians");

function makeGreat(magician: string[]): void {
    const wordToAdd: string = "The Great";
    for (let i = 0; i < magician.length; i++) {
        magician[i] = wordToAdd + " " + magician[i];
    }
}

makeGreat(magician)

showMagician(magician);
