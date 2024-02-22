/*
* Greetings: Start with the array you used in Exercise 11, 
* but instead of just printing each person’s name, print a message to them. 
* The text of each message should be the same, 
* but each message should be personalized with the person’s name.
*/

import promptSync from "prompt-sync";

const prompt = promptSync();

let names2: string[] = [];

for (let index = 0; index < 3; index++) {
    names2.push(prompt("Enter your 3 friends name 1 by one: "));
}


for (let index = 0; index < names2.length; index++) {
    console.log(`Assalam o Alaikum, ${names2[index]}! How are you?`);
}

