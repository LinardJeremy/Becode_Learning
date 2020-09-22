// 06-dom/12-change-event-input-two/script.js - 6.12: change event (2)


(() => {
    let input = document.getElementById('pass-one');
    
    input.addEventListener('input', function(event) {
    let matches = input.value.match(/\d{2,2}/);
    if (matches != null && (input.value.length<9)) {
        document.getElementById('validity').innerHTML= "ok";
    }
    else {
        document.getElementById('validity').innerHTML= "Not ok";
    }
});

    // your code here
    // if (input.includes([0-9])){
    //     alert("il y a un chiifre");

    // }

})();
