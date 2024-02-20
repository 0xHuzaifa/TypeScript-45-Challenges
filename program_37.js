"use strict";
/*
* Large Shirts: Modify the make_shirt() function so that shirts are large by default
* with a message that reads I love TypeScript.
* Make a large shirt and a medium shirt with the default message,
* and a shirt of any size with a different message.
*/
function makeShirt1(size = "Large", text = "I love typeScript") {
    console.log(`You have ordered a ${size} size shirt with the message: "${text}".`);
}
makeShirt1();
makeShirt1('Medium', "CooL");
