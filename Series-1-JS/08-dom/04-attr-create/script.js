// 06-dom/04-attr-create/script.js - 6.4: manipulating attributes and creating elements


(() => {

    // your code here
    let c = document.getElementById('source');
    let image = c.getAttribute('data-image');
    let x = document.createElement('img');
    let t= document.getElementById('target');
    t.append(x);
   x.setAttribute("src",image);
    


})();
