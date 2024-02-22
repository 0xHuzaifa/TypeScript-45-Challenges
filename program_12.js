"use strict";
/*
* Greetings: Start with the array you used in Exercise 11,
* but instead of just printing each person’s name, print a message to them.
* The text of each message should be the same,
* but each message should be personalized with the person’s name.
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let names2 = [];
for (let index = 0; index < 3; index++) {
    names2.push(prompt("Enter your 3 friends name 1 by one: "));
}
for (let index = 0; index < names2.length; index++) {
    console.log(`Assalam o Alaikum, ${names2[index]}! How are you?`);
}
