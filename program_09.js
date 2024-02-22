"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function userInputAndPrint() {
    const userInput = prompt("Enter your favorite number: ");
    const numberInput = parseInt(userInput);
    if (!isNaN(numberInput)) {
        console.log("WoW! Your Favorite Number is: ", numberInput);
    }
    else {
        console.log("Please enter valid input");
    }
}
userInputAndPrint();
