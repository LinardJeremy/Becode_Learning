
// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {
// absence des {} aprés les conditions if  et else if, apparament ça marche en JS, attention la condition fizzbuzz devait être
// la première a être vérifié.
    // your code here
    for (let i=1; i<=100; i++){
        if (i%15 ===0 )
        console.log("fizzbuzz");

        else if (Number.isInteger(i/3))
            console.log("fizz");
        
         else if (Number.isInteger(i/5)) 
            console.log("buzz");

         
       else 
        
            console.log(i);
    }


})();
