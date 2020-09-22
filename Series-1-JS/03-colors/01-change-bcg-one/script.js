
// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)


(() => {
    let button1 = document.getElementById('red');
    let button2 = document.getElementById('green');
    let button3 = document.getElementById('yellow');
    let button4 = document.getElementById('blue');

    document.getElementById("red").addEventListener("click", function(){
        document.getElementById("body").style.backgroundColor = "red";
      });
      document.getElementById("green").addEventListener("click", function(){
        document.getElementById("body").style.backgroundColor = "green";
      });
      document.getElementById("yellow").addEventListener("click", function(){
        document.getElementById("body").style.backgroundColor = "yellow";
      });
      document.getElementById("blue").addEventListener("click", function(){
        document.getElementById("body").style.backgroundColor = "blue";
      });
   
   

})();
