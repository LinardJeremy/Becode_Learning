const readlineSync = require("readline-sync");
console.log("Entrez deux chiffres ils seront additioné soustrait, multiplé et divisé");
let numberOne =  new Number (readlineSync.question('Le premier chiffre ?'));
let numberTwo =  new Number (readlineSync.question('deuxieme chiffre?'));
console.log( "Résultat addition : ");
console.log (numberOne + numberTwo);
console.log( "Résultat soustraction : ");
console.log( numberOne - numberTwo);
console.log( "Résultat multiplication : ");
console.log( numberOne * numberTwo);
console.log( "Résultat divisé : ");
console.log( numberOne/ numberTwo );
console.log( "Résultat modulo : ");
console.log( numberOne % numberTwo);







