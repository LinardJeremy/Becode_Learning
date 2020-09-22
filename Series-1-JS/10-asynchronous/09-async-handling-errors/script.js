// 10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', myFunction);
//    le message d'erreu s'affiche pas je sais pas ce qui fonctionne pas
   async function myFunction(){
        const promise = await window.lib.getPersons();
                promise.forEach(person => {console.log(person)}),
                (error)=> {
                    console.error("une erreur est survenue !");}
                }

})();
