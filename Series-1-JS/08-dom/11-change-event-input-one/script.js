// 06-dom/11-change-event-input-one/script.js - 6.11: change event (1)


(() => {
    let input = document.getElementById('pass-one');
    // your code here
    input.addEventListener('input', function(event) {
         if (input.value.length <=10) {
             for (let i=0; i<input.value.length;i++){
                 document.getElementById('counter').innerHTML= (1+i)+"/10";
             }
         }
         else if(input.value.length>=9){
             input.setAttribute('maxlength',10);
         }
       
       
        
        });

})();
