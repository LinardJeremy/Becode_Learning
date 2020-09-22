// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set


(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    // your code here
    document.getElementById("run").addEventListener("click", () => {
    console.log(people.size);
    if (people.has("Alexandre")){
        console.log("Alexandre est présent dans la liste");
    }
    else {
        console.log("il n'y est pas");
    }
    });
})();
