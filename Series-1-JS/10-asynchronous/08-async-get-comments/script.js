// 10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', myFunction);

   async function myFunction(){
        const promisePosts = await window.lib.getPosts();
         promisePosts.forEach(async post =>{
             const commentPromise = await window.lib.getComments(post.id);
             commentPromise.forEach(comment=>{
                post.comment = comment;
                console.log(comment);
            });

         });
    };
})();
