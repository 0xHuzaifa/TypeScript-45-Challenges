"use strict";
/*
* Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
* Make sure you use each character combination, "\t" and "\n", at least once.
* Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
*/
let someName = "\tSome \n Name";
console.log(someName);
console.log(someName.trim());
console.log(someName.replace(/\s/g, ''));
/*
* The trim() method in JavaScript and TypeScript only removes whitespace characters
* from the beginning and end of a string.
* It does not remove whitespace characters from within the string itself.
*
* /\s/g is a regular expression that matches all whitespace characters (\s),
* and the g flag indicates a global match (matches all occurrences, not just the first one).
* replace() method replaces all matches of the regular expression with an empty string,
* effectively removing all whitespace characters from the string.
* This will result in "SomeName" as the output, with all whitespace characters removed.
*/
