

(() => {
    // your code here
    let x = document.getElementById('target');
    let template = document.getElementById('tpl-hero');
    document.getElementById('run').addEventListener("click", function(){
        fetch('http://localhost:3000/heroes')
       .then(function (response){
           return response.json()
       })
       .then(function (data){
        //    x.innerHTML=data[0]['name'];
        let zz = document.querySelectorAll('.name');
          for (let i=0;i<zz.length;i++){
              let tz = zz[i];
           tz.textContent = data[0]['name'];
          }
            // for (let i=0;i<data.length;i++){
            // let z = data[i];
            //  }
    
       })
    });
})();
