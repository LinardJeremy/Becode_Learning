// 10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', myFunction);
    
    async function myFunction(){
       const promise = await window.lib.getPosts();
      
       promise.forEach(post => {
           console.log(post)
       })
    };
     
})();
