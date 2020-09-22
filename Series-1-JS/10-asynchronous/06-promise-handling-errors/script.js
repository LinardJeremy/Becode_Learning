// 10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', myFunction);
   
//   function error(){
//     console.error("une erreur est survenue");
       
//     };
   
   
    function myFunction(){
        const promise = window.lib.getPersons();

            promise.then((persons) =>{ 
                persons.forEach(person => console.log(person))},
            (error)=>{
                    console.error("une erreur est survenue")
                  });
    }

            
            //    if(error!=null){
            //    console.error("une erreur est survenue");
            //  }

})();
