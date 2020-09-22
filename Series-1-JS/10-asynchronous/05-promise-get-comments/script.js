// 10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', myFunction);
    
    function myFunction(){
        const promisePosts = window.lib.getPosts();
        promisePosts.then((posts) => posts.forEach(post => {
            const promiseComments = window.lib.getComments(post.id);
            promiseComments.then((comments) => {
                post.comments = comments;
                console.log(post);                
            });
        }));
    }
       // window.lib.getPosts((error,posts) =>{posts.forEach(post => console.log(post))});
})();
