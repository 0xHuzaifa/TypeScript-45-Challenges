/*
* Checking Usernames: Do the following to create a program that simulates how websites 
* ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. 
* Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. 
* If it has, print a message that the person will need to enter a new username. 
* If a username has not been used, print a message saying that the username is available.
*/

const currentUsers: string[] = ['huzaifa', 'shuja', 'moiz', 'faraz', 'bilal'];

const newUsers: string[] = ['abdullah', 'bilal', 'rohan', 'shuja'];

// Function to check if a username is already taken
function isUserNameTaken(userName: string): boolean {
    return currentUsers.some(user => user.toLowerCase() === userName.toLowerCase());
}

// Loop through newUsers to check if each username is available
for (const newUser of newUsers) {
    if (isUserNameTaken(newUser)) {
        console.log(`The username '${newUser}' has already been taken. Please enter a new username.`);
    } else {
        console.log(`The username '${newUser}' is available.`);
    }
}