"use strict";
/*
* Cars: Write a function that stores information about a car in a Object.
* The function should always receive a manufacturer and a model name.
* It should then accept an arbitrary number of keyword arguments.
* Call the function with the required information and two other name-value pairs,
* such as a color or an optional feature.
* Print the Object that’s returned to make sure all the information was stored correctly.
*/
function storeCarInfo(manufacturer, model, ...args) {
    const car = {
        manufacturer: manufacturer,
        model: model
    };
    // for (const arg of args) {
    //     if (args.length === 0) {
    //         console.log(`${manufacturer}, ${model}`);   
    //     } 
    //     else if (args.length === 1) {
    //         if (typeof arg === 'string') {
    //             car.color = arg;
    //             console.log(`${manufacturer}, ${model}, ${car.color}`);
    //         } else if (typeof arg === 'number') {
    //             car.year = arg;
    //             console.log(`${manufacturer}, ${model}, ${car.year}`);
    //         }
    //     }
    //     else if (args.length === 2) {
    //         if (typeof arg === 'string') {
    //             car.color = arg;
    //         } 
    //         if (typeof arg === 'number') {
    //             car.year = arg;
    //         }
    //         console.log(`${manufacturer}, ${model}, ${car.color}, ${car.year}`);
    //     } 
    // }
    for (const arg of args) {
        if (typeof arg === 'string') {
            car.color = arg;
        }
        else if (typeof arg === 'number') {
            car.year = arg;
        }
    }
    console.log(`${manufacturer}, ${model}${car.color ? ', ' + car.color : ''}${car.year ? ', ' + car.year : ''}`);
    return car;
}
// Test cases
storeCarInfo("Toyota", "Camry");
storeCarInfo("Honda", "Civic", "Black");
storeCarInfo("Ford", "Mustang", 2022);
storeCarInfo("Tesla", "Model S", "Electric");
storeCarInfo("Chevrolet", "Silverado", "Truck", 2023);
storeCarInfo("Chevrolet", "Silverado", 2000, "Truck");
