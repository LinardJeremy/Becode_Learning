let httprequest = new XMLHttpRequest();
httprequest.open('GET','https://thatsthespir.it/api', true);
httprequest.onreadystatechange = function (){
     if (httprequest.readyState === 4){
    //    let json = JSON.parse(httprequest.responseText);
        // document.getElementById('result').innerHTML = httprequest.responseText; 
        JSON.parse(httprequest.responseText);
        console.log(JSON.parse(httprequest.responseText));
          document.getElementById('quote').innerHTML= JSON.parse(httprequest.responseText).quote;
          document.getElementById('author').innerHTML= JSON.parse(httprequest.responseText).author;
          document.getElementById('img').src= JSON.parse(httprequest.responseText).photo;
        
    }
    if (error){
        alert("Une erreur est survenu la page n'a pas pu être chargée retente plus tard!");
    };
    
    
    // console.log(httprequest);

}
httprequest.send();
