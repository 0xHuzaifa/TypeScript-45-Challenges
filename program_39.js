"use strict";
/*
* City Names: Write a function called city_country() that takes in the name of a city and its country.
* The function should return a string formatted like this:

* "Lahore, Pakistan"

* Call your function with at least three city-country pairs, and print the value that’s returned.
*/
let countryNames = {
    "Pakistan": {
        citiesName: "Lahore",
    },
    "USA": {
        citiesName: "Washington, DC",
    },
    "China": {
        citiesName: "Beijing"
    }
};
function city_country(cityName, countryName) {
    console.log(`${cityName}, ${countryName}`);
}
for (let country in countryNames) {
    city_country(countryNames[country].citiesName, country);
}
