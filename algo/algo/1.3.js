const readlineSync = require("readline-sync");
let firstName = readlineSync.question('Can you give me your Firstname please?');
console.log("Ton prenom est " + firstName);
