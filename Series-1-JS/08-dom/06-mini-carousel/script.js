// 06-dom/06-mini-carousel/script.js - 6.6: mini carousel


(() => {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    let Image = document.querySelector('.material figure img');
    let t = 0;

    
    document.getElementById("next").addEventListener("click", () => {
       if (t<(gallery.length-1)){
       t++;
       }
        Image.setAttribute('src',gallery[t]);


    });


})();
