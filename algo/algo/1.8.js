const readlineSync = require("readline-sync");
let reponse1 = readlineSync.question("Donnez le nom d un animal. ");
let reponse2 =  readlineSync.question("Donnez le nom d une ville. ");
let reponse3 = readlineSync.question("Donnez un verbe. ");
console.log( "Un/une " + reponse1 + " vous a " + reponse3 + " à " + reponse2);