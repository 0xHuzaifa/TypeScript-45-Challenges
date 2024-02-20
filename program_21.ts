/*
* They think of something you could store in a TypeScript Object. 
* Write a program that creates Objects containing these items.
*/

// Object representing information about different countries
let countriesInfo: { [country: string]: { capital: string, population: number, language: string } } = {
    "USA": {
        capital: "Washington, D.C.",
        population: 331000000,
        language: "English"
    },
    "China": {
        capital: "Beijing",
        population: 1441000000,
        language: "Mandarin"
    },
    "India": {
        capital: "New Delhi",
        population: 1393000000,
        language: "Hindi"
    },
    "Brazil": {
        capital: "Brasília",
        population: 213000000,
        language: "Portuguese"
    },
    "Russia": {
        capital: "Moscow",
        population: 146700000,
        language: "Russian"
    }
};

// Print information about each country
for (let country in countriesInfo) {
    console.log(`Country: ${country}`);
    console.log(`Capital: ${countriesInfo[country].capital}`);
    console.log(`Population: ${countriesInfo[country].population}`);
    console.log(`Language: ${countriesInfo[country].language}\n`);
}
