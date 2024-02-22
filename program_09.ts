// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
import promptSync from "prompt-sync";

const prompt = promptSync();

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

