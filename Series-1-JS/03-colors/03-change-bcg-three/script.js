
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {
    document.getElementById("run").addEventListener("click", () => {
        document.body.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    });
    // your code here

})();
