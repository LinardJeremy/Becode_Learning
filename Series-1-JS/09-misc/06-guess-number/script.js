// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    // your code here
    function random(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
 let x = random(0,100);
alert("devinez le nombre");
let reponse = Number;
let i =1;



while (reponse !== x) {
let reponse = prompt("Quel est le nombre ?");

  
    if (reponse > x) {
          alert("Le chiffre est plus petit");
          i++;

      }
     else if (reponse < x){
          alert("le chiffre est plus grand");  
           i++;

      }
      if (reponse == x ) {

        alert("bravo vous avez trouvé ! en  " + i+ " "+"coup");
        break ;
    }

    }

})();
