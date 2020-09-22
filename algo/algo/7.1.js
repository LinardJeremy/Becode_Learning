const readlineSync = require("readline-sync");


let random = Math.floor(Math.random() * 101); 
console.log(random);
let reponse = Number;


while (reponse !== random) {
    let reponse = readlineSync.question('Essayez de devinez le nombre entre 1 et 100  ');

      
    if (reponse > random) {
          console.log("Le chiffre est plus petit");


          
          
      }
     else if (reponse < random){
          console.log("le chiffre est plus grand");

          
          
          
      }
      if (reponse == random ) {

        console.log("bravo vous avez trouvé ! ");
        break ;
    }

   
    }

    

