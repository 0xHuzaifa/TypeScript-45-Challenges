"use strict";
/*
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.


*/
// Version for a Green Alien
let alien_color4 = 'green'; // The alien is green
if (alien_color4 === 'green') {
    console.log("The player earned 5 points"); // This will be printed
}
else if (alien_color4 === 'yellow') {
    console.log("The player earned 10 points");
}
else if (alien_color4 === 'red') {
    console.log("The player earned 15 points");
}
// Version for a Yellow Alien
let alien_color5 = 'yellow'; // The alien is yellow
if (alien_color5 === 'green') {
    console.log("The player earned 5 points");
}
else if (alien_color5 === 'yellow') {
    console.log("The player earned 10 points"); // This will be printed
}
else if (alien_color5 === 'red') {
    console.log("The player earned 15 points");
}
// Version for a Red Alien
let alien_color6 = 'red'; // The alien is red
if (alien_color6 === 'green') {
    console.log("The player earned 5 points");
}
else if (alien_color6 === 'yellow') {
    console.log("The player earned 10 points");
}
else if (alien_color6 === 'red') {
    console.log("The player earned 15 points"); // This will be printed
}
