// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', displayPosts);
    
    function displayPosts() {
    window.lib.getPosts((error,posts)=>{
        posts.forEach(post => {
            window.lib.getComments(post.id,(error,comment)=>{
                post.comment = comment;
                console.log(comment);
            });
        })
    })
    
    }

})();
