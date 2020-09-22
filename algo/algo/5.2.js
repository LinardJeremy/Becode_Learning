const readlineSync = require("readline-sync");

let series = {
    "Nom": "",
    "Année": "",
    "Acteurs" : [],
}
let series2 = {
    "Nom": "",
    "Année": "",
    "Acteurs" : [],
}
function randomizeCast(tvSeries) {
    var j, x, i;
    for (i = tvSeries.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = tvSeries[i];
        tvSeries[i] = tvSeries[j];
        tvSeries[j] = x;
    }
    return tvSeries;
}

function askTvSeries() {
    series.Nom = readlineSync.question('Le nom d"une serie ');
    series.Année = readlineSync.question("l'annee de production ");

let actor = readlineSync.question('Donne le nom d"un acteur laisse vide pour terminer ');
while (actor !== "") {
        series.Acteurs.push({"Acteurs" : actor});
        series2.Acteurs.push({"Acteurs": actor});
        actor = readlineSync.question('Donne le nom d"un acteur laisse vide pour terminer ');
        
    }
    randomizeCast(series.Acteurs);
    randomizeCast(series2.Acteurs);
    
    return series;

}
function askTvSeries2() {
    series2.Nom = readlineSync.question('Le nom d"une serie ');
    series2.Année = readlineSync.question("l'annee de production ");

    return series2;
    
}




 

console.log(JSON.stringify(askTvSeries()));
console.log(askTvSeries2());