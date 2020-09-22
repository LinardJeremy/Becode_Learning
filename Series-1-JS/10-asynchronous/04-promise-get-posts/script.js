// 10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', myFunction);
    
     function myFunction(){
        const promise = window.lib.getPosts();
       
        promise.then((posts)=>{posts.forEach(post => {
            console.log(post)}
        )});
        // window.lib.getPosts((error,posts) =>{posts.forEach(post => console.log(post))});
     };


})();
