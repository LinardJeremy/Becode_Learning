const readlineSync = require("readline-sync");
let shoeSize = new Number (readlineSync.question('Your shoe size ?'));
let birthYear = new Number (readlineSync.question('Your birth year ?'));
console.log( (((shoeSize*2+5)*50) - birthYear) + 1766 );