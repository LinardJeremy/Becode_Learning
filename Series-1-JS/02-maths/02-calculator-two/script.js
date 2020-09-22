
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

  
     


    const performOperation =  operation => {
        // perform the operation
        let numberOne = new Number (document.getElementById("op-one").value);
        let numberTwo = new Number (document.getElementById("op-two").value);
        switch (operation)
        {
            case 'addition':
                w= numberOne+numberTwo;
                alert(w);
                break;
            case 'substraction': 
                w = numberOne - numberTwo;
                alert(w);
                break;
             case 'multiplication': 
               w= numberOne*numberTwo;
                 alert(w);
                 break;
            case 'division':
                alert(numberOne/numberTwo);
                break;

        }
        
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();

