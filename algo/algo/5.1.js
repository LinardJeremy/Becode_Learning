 const readlineSync = require("readline-sync");

 


function askTvSeries() {
    let name = readlineSync.question('Le nom d"une serie ');
    let year = readlineSync.question("l'annee de production ");
    let series = {
        "Nom": name,
        "Année": year,
        "Acteurs" : [],
    }
let actor = readlineSync.question('Donne le nom d"un acteur laisse vide pour terminer ');
while (actor !== "") {
        series.Acteurs.push({"actor" : actor});
        actor = readlineSync.question('Donne le nom d"un acteur laisse vide pour terminer ');
    }
    return series;

}

 


console.log(JSON.stringify(askTvSeries()));