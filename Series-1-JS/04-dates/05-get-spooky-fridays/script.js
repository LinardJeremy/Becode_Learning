
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    // your code here
    
    document.getElementById("run").addEventListener("click", () => {
        let yearUser= document.getElementById("year").value;
        let d=new Date();
        //  d.setYear(yearUser);
         for(var i=0;i<12;i++) {
            d.setMonth(i);
            d.setDate(13);
            d.setYear(yearUser);
            if (d.getDay()==5) {
                alert(d);
            }
        }
     }); 
})();
