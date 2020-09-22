// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    // your code here
let clicks= 0;
let button = document.getElementById('increment');
clicksStorage = localStorage;
console.log(clicksStorage.getItem("numberClick",clicks));
document.getElementById("target").innerHTML = clicksStorage.getItem("numberClick",clicks) ;

function onClick(){
     clicks +=1;
    //  clicks = (parseInt(clicksStorage.getItem("numberClick",clicks))+1);
    document.getElementById("target").innerHTML = clicks;
clicksStorage.setItem("numberClick",clicks);
console.log(clicksStorage.getItem("numberClick",clicks));
}
button.addEventListener("click", onClick);




})();
