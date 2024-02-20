let guestList4: string[] = ["Huzaifa", "Moiz", "Faraz"];


let guestWhoCantAttend4: string = "Moiz";
let replacementGuest4: string[] = ["Shuja", "Bilal"];

guestList4 = guestList4.filter(guest => guest !== guestWhoCantAttend4);
guestList4.push(replacementGuest4[0]);


// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
console.log("Good news! We found a bigger dinner table. There's more space for everyone!");

// Add one new guest to the beginning of your array.
guestList4.unshift("Abdullah");

// Add one new guest to the middle of your array.
const middleIndex4: number = Math.floor(guestList4.length / 2);
guestList4.splice(middleIndex4, 0, replacementGuest4[1]);

// Use append() to add one new guest to the end of your list.
guestList4.push("Rohan")

// Print a new set of invitation messages, one for each person in your list.

guestList4.forEach(guest => {
console.log(`Dear ${guest}, you're invited to the dinner event. Please join us!`);    
});

// Start with your program from Exercise 16. 
// Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("Sorry to say this, but we have short tables. So we can only invite 2 persons");

// Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, 
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.

while (guestList4.length !== 2 ) {
    guestList4.pop();
}

guestList4.forEach(guest => {
    console.log(`Dear ${guest}, you're invited to the dinner event. Please join us!`);    
});

// Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program.
let counter4: number = 0;
while (counter4 < 2 ) {
    guestList4.pop();
    counter4++;
}

console.log("Updated Guest List (Empty):", guestList4);
console.log(`we are inviting ${guestList4.length} guests to our dinner`);
