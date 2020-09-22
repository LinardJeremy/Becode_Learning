const readlineSync = require("readline-sync");
let age = new Number (readlineSync.question('Quel est votre age ? (uniquement chiffre) '));

if (age >= 18) {
    console.log ("Vous etes un adulte");

}
else if (age < 18) {
    console.log ("vous etes un enfant, cassez-vous");
}