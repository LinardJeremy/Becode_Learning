const readlineSync = require("readline-sync");
let numberOne = new Number (readlineSync.question('Can you give me a decimal number please, it will be trunc?'));
let numberTwo = new Number (readlineSync.question('Can you give me a second decimal number please ?'));
let numberTrunc = Math.trunc(numberOne);
console.log("entier premier nombre : " + numberTrunc);

console.log("Résultat de la multiplication : " + ( numberTrunc * numberTwo));
