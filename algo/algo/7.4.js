const readlineSync = require("readline-sync");
let reponse = Number;

let pizza = [];
while (reponse != 4){


    console.log("Hello! Welcome to the Pizza Flavors Manager \n Please choose your actions: \n 1- List all the pizza flavors \n 2 - Add a new pizza flavor \n 3 - Remove a pizza flavor \n 4 - Exit this program ");

    let reponse = new Number (readlineSync.question("Enter your action's number : "));

if (reponse == 1){
    console.log(pizza);
}
if (reponse ==2){
    let savorPizza = readlineSync.question("Quelle saveur ? ");
    pizza.push(savorPizza);
}
if (reponse ==3){
    let deletePizza = new Number (readlineSync.question("Entrez le numéro de saveur à supprimer : "));
    delete pizza[deletePizza];
    console.log(pizza);
}
if (reponse ==4){
    break;
}
}
