/* 
* Intentional Error: If you haven’t received an array index error in one of your programs yet, 
* try to make one happen. Change an index in one of your programs to produce an index error. 
* Make sure you correct the error before closing the program.
*/


let guestList: string[] = ["Huzaifa", "Moiz", "Faraz"];

// Intentionally causing an index error by accessing an out-of-bounds index
console.log(guestList[3]);  // Trying to access the 4th element, which doesn't exist

