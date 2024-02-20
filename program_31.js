"use strict";
/*
* No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
/*
* Hello Admin: Make a array of five or more usernames, including the name 'admin'.
* Imagine you are writing code that will print a greeting to each user after they log in to a website.
* Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting,
* such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/
const admins1 = [];
const admin1 = "Huzaifa";
if (admins1.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (const members of admins1) {
        if (members === "Huzaifa") {
            console.log(`Hello ${admin1}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${members}, thank you for logging again`);
        }
    }
    ;
}
