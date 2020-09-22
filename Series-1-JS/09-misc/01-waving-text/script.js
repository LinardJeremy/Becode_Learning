// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

    // your code here
    let text = document.getElementById('target');
    let material = document.querySelector('.material');
    text.style.display = "none";
    
    function hover(str){
        let split =str.split('');

        split.forEach(letter => {
            let span= document.createElement('span');
            span.innerHTML= letter;
            material.append(span);
            
        });
        let spans = document.querySelectorAll('.material span');
        spans.forEach(span => {
               span.style.fontSize = "2rem";
               span.style.position = "relative";
                console.log(spans);
           
                span.addEventListener('mouseover', () =>{
                span.style.transform = "translateY(-30%)";
                span.style.fontSize = "4rem";
               span.style.color = "blue";
             })
               span.addEventListener('mouseleave', ()=>{
                  span.style.color = 'black';
                  span.style.fontSize = "2rem";


             })

    })
};
    hover(text.textContent);

})();
