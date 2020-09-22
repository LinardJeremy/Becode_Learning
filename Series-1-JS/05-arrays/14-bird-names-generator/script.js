// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here
    function rand(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      let newArray = ([...adjectives]);
      let Animal = birds[rand(birds.length)];
      
      document.getElementById("run").addEventListener("click", () => {
        if (Animal['fem']=== true){
        document.getElementById("target").innerHTML=Animal['name'] + " "+ newArray[rand(newArray.length)]+ "e";
         
     }
     else {
        document.getElementById("target").innerHTML=Animal['name'] + " " + newArray[rand(newArray.length)];
         
     }
    
    });
})();
