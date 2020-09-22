// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {

    // your code here
    let target = document.getElementById('target');
    let button1 = document.getElementById('part-one');
    let button2 = document.getElementById('part-two');
    let button3 = document.getElementById('part-three');
    let button4 = document.getElementById('part-four');
   
   
    button1.addEventListener("click", function(){
      let i =0;
       i++;
   let t = (parseInt(button1.innerHTML)+i);
        if (t<499){
       button1.innerHTML = t;
     target.innerHTML="0"+button1.innerHTML+button2.innerHTML+button3.innerHTML+button4.innerHTML;   

      }
       if (t>=499){
     button1.innerHTML = 499;
     target.innerHTML="0"+button1.innerHTML+button2.innerHTML+button3.innerHTML+button4.innerHTML;   
     }

    }); 
   
 button2.addEventListener("click", function(){
         let i =0;
        i++;
    let t = (parseInt(button2.innerHTML)+i);
         if (t<10){
        button2.innerHTML = "0"+t;

       }
       else if (t>=10){
      button2.innerHTML = t;
    
       }
       if (t<10){
        target.innerHTML="0"+button1.innerHTML+button2.innerHTML+button3.innerHTML+button4.innerHTML;
      
       }
       else if (t>10) {
        target.innerHTML="0"+button1.innerHTML+button2.innerHTML+button3.innerHTML+button4.innerHTML;
        if (t>=99){
      button2.innerHTML = 99;
      target.innerHTML="0"+button1.innerHTML+button2.innerHTML+button3.innerHTML+button4.innerHTML;   
      }
           
       }

     });
     
    button3.addEventListener("click", function(){
        let i =0;
       i++;
       let z = (parseInt(button3.innerHTML)+i);
        if (z<10){
       button3.innerHTML = "0"+z;

      }
      else if (z>=10){
     button3.innerHTML = z;
         }
      if (z<10){
      target.innerHTML="0"+button1.innerHTML+button2.innerHTML+button3.innerHTML+button4.innerHTML;
         }
         else if (z>10) {
      target.innerHTML="0"+button1.innerHTML+button2.innerHTML+button3.innerHTML+button4.innerHTML;
        }
        if (z>=99){
            button3.innerHTML = 99;
            target.innerHTML="0"+button1.innerHTML+button2.innerHTML+button3.innerHTML+button4.innerHTML;    
            }
    });

    button4.addEventListener("click", function(){
        let i =0;
       i++;
       let z = (parseInt(button4.innerHTML)+i);
        if (z<10){
       button4.innerHTML = "0"+z;

      }
      else if (z>=10){
     button4.innerHTML = z;
   
      }
      if (z<10){
        target.innerHTML="0"+button1.innerHTML+button2.innerHTML+button3.innerHTML+button4.innerHTML;
        
         }
         else if (z>10) {
            target.innerHTML="0"+button1.innerHTML+button2.innerHTML+button3.innerHTML+button4.innerHTML;
        
             
         }
         if (z>=99){
            button4.innerHTML = 99;
            target.innerHTML="0"+button1.innerHTML+button2.innerHTML+button3.innerHTML+button4.innerHTML;      
            }
    });
})();
