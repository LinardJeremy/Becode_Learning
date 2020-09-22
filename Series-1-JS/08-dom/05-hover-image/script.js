// 06-dom/05-hover-image/script.js - 6.5: image hover


(() => {

    // your code here
    let x = document.querySelector('.material img');
    let t = x.getAttribute('data-hover');
    x.onmouseover = function(){
        x.setAttribute("src",t)
    };


})();
