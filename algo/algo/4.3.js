let min = 1;
    let max= 10;


function rand10(min, max) {
    min=Math.ceil(min);
    max= Math.floor(max);
   return Math.floor(Math.random() * (max - min)) + min;

}
// n = rand10(min,max);
// let array = [];
// array.length = n;

 function multiRand(n){
        n = rand10(min,max);
        let array = [];
        return array.length = n ;
    }


// let array = [];
console.log("la longeur du tableau crée aléatoirement est : "+ multiRand());