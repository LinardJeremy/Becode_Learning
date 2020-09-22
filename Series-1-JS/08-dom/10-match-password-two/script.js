// 06-dom/10-match-password-two/script.js - 6.10: password verification (2)


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let pass1 = document.getElementById('pass-one').value;
        let pass2 = document.getElementById('pass-two').value;
        if (pass1 ===pass2){
            alert("bravo c'est le bon pass");
        }
        else {
            document.getElementById('pass-one').setAttribute('class',"error");
            document.getElementById('pass-two').setAttribute('class',"error");

        }
    
    });

})();
