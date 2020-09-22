const readlineSync = require("readline-sync");
let n = new Number (readlineSync.question("Une addition de combien de termes ?"));
let i = 1;
let x = 0;
while ( i <= n) {
let p = new Number (readlineSync.question("Donnez moi un chiffre "));
    i++;
    x = x+ p;
    

}
console.log("résultat addition des chiffres donné : " + x);
