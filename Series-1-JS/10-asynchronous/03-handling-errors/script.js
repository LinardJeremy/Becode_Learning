// 10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', myFunction);
    function myFunction(){
        window.lib.getPersons((error,persons) =>{
            if(error!=null){
                console.error("une erreur est survenue");
            }
            persons.forEach(person => console.log(person))

        });
        
    }
})();
