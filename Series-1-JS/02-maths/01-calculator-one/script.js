



// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
let numberOne = new Number (document.getElementById("op-one").value);
let numberTwo = new Number (document.getElementById("op-two").value);
alert(numberOne + numberTwo);

    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let numberOne = new Number (document.getElementById("op-one").value);
let numberTwo = new Number (document.getElementById("op-two").value);
alert(numberOne - numberTwo);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perfolet numberOne = new Number (document.getElementById("op-one").value);
        let numberOne = new Number (document.getElementById("op-one").value);
        let numberTwo = new Number (document.getElementById("op-two").value);
        alert(numberOne * numberTwo);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let numberOne = new Number (document.getElementById("op-one").value);
let numberTwo = new Number (document.getElementById("op-two").value);
alert(numberOne / numberTwo);
    });
})();


