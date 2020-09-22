// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here
   let me = {
       firstName : "Jeremy",
       lastName : "Linard",
       age : 26,
       city: "Anderlues",
       country: "Belgium"
   };
   
    document.getElementById("run").addEventListener("click", () => {
    console.log(me);
    });
})();
