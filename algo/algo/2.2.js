const readlineSync = require("readline-sync");
let min = new Number (readlineSync.question(' Donnez une valeur minimal '));
let max = new Number (readlineSync.question('Donnez une valeur maximal '));
let current = new Number (readlineSync.question(' Donnez une valeur actuelle situe entre les deux '));

if (current < max && current > min) {
    console.log("Vous avec compris l'exo bravo voilà ta valeur " + current);

}

else if (min >= max) {
    console.log("La valeur minimal ne peut pas être supérieur à la valeur maximal")
}


else {
    console.log("T'as rien comrpis rentre chez toi !");
}


