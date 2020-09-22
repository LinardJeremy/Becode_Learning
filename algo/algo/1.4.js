const readlineSync = require("readline-sync");
let firstName = readlineSync.question('Can you give me your Firstname please?');
let name = readlineSync.question('Can you give me your name please?');
let city = readlineSync.question('Where do you come from ?');
console.log("Vous vous appelez " + name + " " + firstName + " et vous vivez à " + city);
