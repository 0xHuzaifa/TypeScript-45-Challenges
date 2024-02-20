"use strict";
let guestList3 = ["Huzaifa", "Moiz", "Faraz"];
let guestWhoCantAttend3 = "Moiz";
let replacementGuest3 = ["Shuja", "Bilal"];
guestList3 = guestList3.filter(guest => guest !== guestWhoCantAttend3);
guestList3.push(replacementGuest3[0]);
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
console.log("Good news! We found a bigger dinner table. There's more space for everyone!");
// Add one new guest to the beginning of your array.
guestList3.unshift("Abdullah");
// Add one new guest to the middle of your array.
const middleIndex3 = Math.floor(guestList3.length / 2);
guestList3.splice(middleIndex3, 0, replacementGuest3[1]);
// Use append() to add one new guest to the end of your list.
guestList3.push("Rohan");
// Print a new set of invitation messages, one for each person in your list.
guestList3.forEach(guest => {
    console.log(`Dear ${guest}, you're invited to the dinner event. Please join us!`);
});
// Start with your program from Exercise 16. 
// Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("Sorry to say this, but we have short tables. So we can only invite 2 persons");
// Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, 
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guestList3.length !== 2) {
    guestList3.pop();
}
guestList3.forEach(guest => {
    console.log(`Dear ${guest}, you're invited to the dinner event. Please join us!`);
});
// Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program.
let counter = 0;
while (counter < 2) {
    guestList3.pop();
    counter++;
}
console.log("Updated Guest List (Empty):", guestList3);
