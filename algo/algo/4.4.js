const readlineSync = require("readline-sync");
let tableauUser = new Number (readlineSync.question(" donnez moi un nombre, il va generate un tableau de cet longeur et va ensuite remplir les champs aléatoirement ?"));
let tableau = [1,2,3,4,5,6];
let test = [4,5,9];
let arrayUser = [];
var arrayMax = tableauUser;
var limit = arrayMax + 1;
for (var i = 0; i < arrayMax; i++) {
    arrayUser.push(Math.floor(Math.random(1)*limit));
}



function average(array){
    var a = array.length ;
    var somme = 0;
    for (i=0; i<a; i++) 
        somme += array[i];
return somme/a ;
}

function min(array){
    return Math.min(...array);
}
function max(array){
    return Math.max(...array);
}
console.log("longeur du tableau : " + arrayUser.length);
console.log("Tableau complet : " + arrayUser);
console.log("valeur minimale du tableau : " + min(arrayUser));
 console.log("valeur max du tableau : " + max(arrayUser));
 console.log("moyenne des valeurs : " + average(arrayUser));