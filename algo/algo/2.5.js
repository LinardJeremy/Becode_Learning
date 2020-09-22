const readlineSync = require("readline-sync");
let reponse = new Number (readlineSync.question("Donnez moi votre chiffre favori "));

while (reponse !== 42) {
    let reponse = new Number (readlineSync.question("Donnez moi votre chiffre favori "));

    if (reponse == 42) {
        console.log("bravo tu as trouve");
        break;
    }
    
}
