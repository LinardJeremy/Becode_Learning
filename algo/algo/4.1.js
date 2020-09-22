const readlineSync = require("readline-sync");
let longeur = new Number (readlineSync.question("longeur d'un rectangle ?"));
let largeur = new Number (readlineSync.question("largeur d'un rectangle ?"));

function calcSurface (longeur, largeur) {
 return longeur * largeur ;
}

console.log("surface du rectangle : " + calcSurface(longeur,largeur));