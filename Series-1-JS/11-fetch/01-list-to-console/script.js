// 11-fetch/01-list-to-console/script.js - 11.1: liste vers console


(() => {
    // your code here

    let url = 'http://localhost:3000/heroes' ;
   
    document.getElementById('run').addEventListener("click", function(){
    fetch('http://localhost:3000/heroes')
   .then(function (response){
       return response.json()
   })
   .then(function (data){
       console.log(data);
   })
});

})();
