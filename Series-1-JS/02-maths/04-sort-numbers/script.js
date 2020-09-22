// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
let x=document.getElementById("numbers").value.split(", ");
x.sort(function(a,b){
    return a -b ;
});
alert(x);


    });

})();
