import promptSync from "prompt-sync";

const prompt = promptSync();


/*
* Name Cases: Store a person’s name in a variable, 
* and then print that person’s name in 
* lowercase, uppercase, and titlecase
*/

// Let a variable and assign it a name
var fullName: string = "HUZAIFA ahmed";

// Convert fullName into Lower Case
console.log(`Convert to Lower Case: ${fullName.toLowerCase()}`);

// Convert full Name to Upper Case
console.log(`Convert to Upper Case ${fullName.toUpperCase()}`);

// Convert fullName into Title Case
let titleCase = fullName.split(" ") // Split the full name into an array of words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
    .join(" "); // Join the words back into a single string with spaces between them
console.log(titleCase);


/*
* Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
* Your output should look something like the following, including the quotation marks:

* Albert Einstein once said, “A person who never made a mistake never tried anything new.”
*/

console.log(`Albert Einstein once said, "A person who never made a mistake never tried anything new."`);



/*
* Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
* Then compose your message and store it in a new variable called message. Print your message.

*/

let author: string = "Albert Einstein";

let quote: string = `"A person who never made a mistake never tried anything new."`;

let compose: string = author + " once said, " + quote;

console.log(compose);




/*
* Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
* Make sure you use each character combination, "\t" and "\n", at least once. 
* Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
*/

let someName: string = "\tSome \n Name";

console.log(someName);
console.log(someName.trim());
console.log(someName.replace(/\s/g, ''));

/*
* The trim() method in JavaScript and TypeScript only removes whitespace characters 
* from the beginning and end of a string. 
* It does not remove whitespace characters from within the string itself.
* 
* /\s/g is a regular expression that matches all whitespace characters (\s), 
* and the g flag indicates a global match (matches all occurrences, not just the first one).
* replace() method replaces all matches of the regular expression with an empty string, 
* effectively removing all whitespace characters from the string.
* This will result in "SomeName" as the output, with all whitespace characters removed.
*/



/*
* Number Eight: Write addition, subtraction, multiplication, 
* and division operations that each result in the number 8. 
* Be sure to enclose your operations in print statements to see the results.
*/

console.log(`Addition ${4 + 4}`);

console.log(`Subtraction ${12 - 4}`);

console.log(`Multiplication ${2 * 4}`);

console.log(`Division ${32 / 4}`);


// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

function userInputAndPrint(): void {
    const userInput: string | null = prompt("Enter your favorite number: ");
    const numberInput: number = parseInt(userInput);
    if (!isNaN(numberInput)) {
        console.log("WoW! Your Favorite Number is: ", numberInput);
    } else {
        console.log("Please enter valid input");
    }
}

userInputAndPrint();



/* 
* Adding Comments: Choose two of the programs you’ve written, 
* and add at least one comment to each. 
* If you don’t have anything specific to write because your programs are too simple at this point, 
* just add your name and the current date at the top of each program file. 
* Then write one sentence describing what the program does.
*/


/*
* @author Huzaifa Ahmed
* @Programming-Language TypeScript 
*/



/*
* Names: Store the names of a few of your friends in a array called names. 
* Print each person’s name by accessing each element in the list, one at a time.
*/

let names: string[] = ["Huzaifa", "Moiz", "Shuja", "Faraz", "Bilal"];

// Join the names array elements with commas
const namesString: string = names.join(", ");

// Print the names on the same line
console.log(namesString);


/*
* Greetings: Start with the array you used in Exercise 11, 
* but instead of just printing each person’s name, print a message to them. 
* The text of each message should be the same, 
* but each message should be personalized with the person’s name.
*/

let names2: string[] = [];

for (let index = 0; index < 3; index++) {
    names2.push(prompt("Enter your 3 friends name 1 by one: "));
}


for (let index = 0; index < names.length; index++) {
    console.log(`Assalam o Alaikum, ${names2[index]}! How are you?`);
}




/*
* Your Own Array: Think of your favorite mode of transportation, 
* such as a motorcycle or a car, and make a list that stores several examples. 
* Use your list to print a series of statements about these items, 
* such as “I would like to own a Honda motorcycle.”
*/


const favoriteTransportation: string[] = ["motorcycle", "car", "bike"];

favoriteTransportation.forEach(mode =>{
    switch (mode) {
        case "motorcycle":
            console.log("I love riding motorcycles, especially on scenic routes.");
            break;
        
        case "car":
            console.log("My dream car is a sleek sports car with a powerful engine.");
            break;

        case "bike":
            console.log("Bike are perfect for zipping around the city quickly and efficiently.");
            break;
   
        default:
            break;
    }
});


/*
* Guest List: If you could invite anyone, living or deceased, to dinner, 
* who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
* Then use your list to print a message to each person, inviting them to dinner.
*/

let guestList: string[] = ["Huzaifa", "Moiz", "Faraz"];

guestList.forEach(guest => {
    console.log(`Dear ${guest} you are invited to the dinner tonight`);
});



/*
* Changing Guest List: You just heard that one of your guests can’t make the dinner, 
* so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

* Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.
*/

let guestWhoCantAttend: string = "Moiz";
let replacementGuest: string = "Shuja";

guestList = guestList.filter(guest => guest !== guestWhoCantAttend);
guestList.push(replacementGuest);

guestList.forEach(guest => {
    console.log(`Dear ${guest}, you're invited to the dinner event. Please join us!`);    
});


console.log(`I think ${guestWhoCantAttend} is not coming`);




