
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age

//Donne l'âge mais pas totalement bon, juste j'en ai marre de travailler sur cet exo

(() => {

     let Bd= document.getElementById('dob-day');    
     let year= document.getElementById('dob-year');    
     let month= document.getElementById('dob-month');       
     //    let form = document.getElementById('formSelect');

     
     year.addEventListener('change',function(event){
            let z = event.target.value;
             function calculate_age(dob) { 
                 var diff_ms = Date.now() - dob.getTime();
             var age_dt = new Date(diff_ms); 
              
            return Math.abs(age_dt.getUTCFullYear() - 1970);
             }
             document.getElementById("run").addEventListener("click", () => {
                    alert(calculate_age(new Date(z,5,5)) + " ans");
                 }); 
         });
        

    
        // Bd.addEventListener('change',function(event){ 
        //   event.target.value;
        // });
        //    year.addEventListener('change',function(event){
        //    event.target.value;
        //        });
        //  month.addEventListener('change',function(event){
        // event.target.value;
        // });
        //  document.getElementById("run").addEventListener("click", () => {
        //    alert("test");
        // }); 
})();
