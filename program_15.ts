/*
* Changing Guest List: You just heard that one of your guests can’t make the dinner, 
* so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

* Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.
*/
let guestList0: string[] = ["Huzaifa", "Moiz", "Faraz"];

guestList0.forEach(guest => {
    console.log(`Dear ${guest} you are invited to the dinner tonight`);
});

let guestWhoCantAttend: string = "Moiz";
let replacementGuest: string = "Shuja";

guestList0 = guestList0.filter(guest => guest !== guestWhoCantAttend);
guestList0.push(replacementGuest);

guestList0.forEach(guest => {
    console.log(`Dear ${guest}, you're invited to the dinner event. Please join us!`);    
});


console.log(`I think ${guestWhoCantAttend} is not coming`);




