let guestList2: string[] = ["Huzaifa", "Moiz", "Faraz"];


let guestWhoCantAttend2: string = "Moiz";
let replacementGuest2: string[] = ["Shuja", "Bilal"];

guestList2 = guestList2.filter(guest => guest !== guestWhoCantAttend2);
guestList2.push(replacementGuest2[0]);


// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
console.log("Good news! We found a bigger dinner table. There's more space for everyone!");

// Add one new guest to the beginning of your array.
guestList2.unshift("Abdullah");

// Add one new guest to the middle of your array.
const middleIndex2: number = Math.floor(guestList2.length / 2);
guestList2.splice(middleIndex2, 0, replacementGuest2[1]);

// Use append() to add one new guest to the end of your list.
guestList2.push("Rohan")

// Print a new set of invitation messages, one for each person in your list.

guestList2.forEach(guest => {
console.log(`Dear ${guest}, you're invited to the dinner event. Please join us!`);    
});
