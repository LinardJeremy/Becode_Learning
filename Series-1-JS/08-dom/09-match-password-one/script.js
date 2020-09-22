// 06-dom/09-match-password-one/script.js - 6.9: password verification (1)


(() => {

    // your code here
   
    document.getElementById("run").addEventListener("click", () => {
        let pass1 = document.getElementById('pass-one').value;
        let pass2 = document.getElementById('pass-two').value;
        if (pass1 ===pass2){
            alert("bravo c'est le bon pass");
        }
        else {
            document.getElementById('pass-one').style.borderColor ="red";
            document.getElementById('pass-two').style.borderColor ="red";

        }
    
    });


})();
