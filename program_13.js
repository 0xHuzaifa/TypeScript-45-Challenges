"use strict";
/*
* Your Own Array: Think of your favorite mode of transportation,
* such as a motorcycle or a car, and make a list that stores several examples.
* Use your list to print a series of statements about these items,
* such as “I would like to own a Honda motorcycle.”
*/
const favoriteTransportation = ["motorcycle", "car", "bike"];
favoriteTransportation.forEach(mode => {
    switch (mode) {
        case "motorcycle":
            console.log("I love riding motorcycles, especially on scenic routes.");
            break;
        case "car":
            console.log("My dream car is a sleek sports car with a powerful engine.");
            break;
        case "bike":
            console.log("Bike are perfect for zipping around the city quickly and efficiently.");
            break;
        default:
            break;
    }
});
