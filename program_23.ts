/*
* Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

* let car = 'subaru';

* console.log("Is car == 'subaru'? I predict True.")

* console.log(car == 'subaru')

* • Look closely at your results, and make sure you understand why each line evaluates to True or False.

* • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/

let car: string = 'subaru';

// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

// Test 2
console.log("Is car.endsWith('aru')? I predict True.");
console.log(car.endsWith('aru'));

// Test 3
console.log("Is car != 'ford'? I predict True.");
console.log(car != 'ford');

// Test 4
console.log("Is car !== 'Subaru'? I predict True.");
console.log(car !== 'Subaru');

// Test 5
console.log("Is car.startsWith('sub')? I predict True.");
console.log(car.startsWith('sub'));

// Test 6
console.log("Is car === '12345'? I predict False.");
console.log(car === '12345');

// Test 7
console.log("Is car.includes('end')? I predict False.");
console.log(car.includes('end'));

// Test 8
console.log("Is car.length == 8? I predict False.");
console.log(car.length == 8);

// Test 9
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');

// Test 10
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');