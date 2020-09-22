// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {

    // your code here
    let target = document.getElementById('target');
    let button1 = document.getElementById('fix-part-one');
    let button2 = document.getElementById('fix-part-two');
    let button3 = document.getElementById('fix-part-three');
    let button4 = document.getElementById('fix-part-four');
    let output1 = document.getElementById('part-one');
    let output2 = document.getElementById('part-two');
    let output3 = document.getElementById('part-three');
    let output4 = document.getElementById('part-four');


    function random(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
     
    button1.addEventListener("click", function(){
      output1.value= random(460,499);
      target.innerHTML = "0"+output1.value + output2.value+ output3.value+output4.value;
    
    }); 
    button2.addEventListener("click", function(){
      output2.value= random(00,99);
      target.innerHTML = "0"+output1.value + output2.value+ output3.value+output4.value;
      if (output2.value<10){
        target.innerHTML = "0"+output1.value + "0"+output2.value+ output3.value+output4.value;

      }
    }); 
    button3.addEventListener("click", function(){
      output3.value= random(00,99);
      target.innerHTML = "0"+output1.value + output2.value+ output3.value+output4.value;
      if (output3.value<10){
        target.innerHTML = "0"+output1.value + output2.value+ "0"+ output3.value+output4.value;

      }
    }); 
    button4.addEventListener("click", function(){
      output4.value= random(00,99);
      target.innerHTML = "0"+output1.value + output2.value+ output3.value+output4.value;
      if (output4.value<10){
        target.innerHTML = "0"+output1.value + output2.value+ output3.value+"0"+output4.value;

      }
    }); 
    

})();
