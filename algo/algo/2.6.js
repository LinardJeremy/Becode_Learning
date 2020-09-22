const readlineSync = require("readline-sync");
let reponse = new Number (readlineSync.question("Donnez moi un nombre entre 1 et 7 "));

if (reponse == 1){
    console.log("Lundi");
}
if (reponse == 2) {
    console.log ("Mardi");
}
 if (reponse == 3) {
    console.log ("Mercredi");
}
 if (reponse == 4) {
    console.log ("Jeudi");
}
 if (reponse == 5) {
    console.log ("Vendredi");
}
 if (reponse == 6) {
    console.log ("Samedi");
}
 if (reponse == 7) {
    console.log ("Dimanche");
}