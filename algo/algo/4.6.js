const readlineSync = require("readline-sync");
let nbr = new Number (readlineSync.question('Entre un nombre pour le factoriel'));

function factorial(a){
    if (a== 0) {
        return 1;
    }
    return  a*factorial(a-1);
}
console.log(factorial(nbr));