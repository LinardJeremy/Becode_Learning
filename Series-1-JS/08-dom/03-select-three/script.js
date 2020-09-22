// 06-dom/03-select-three/script.js - 6.3: select multiple elements by css selector


(() => {

    // your code here
  let x=  document.getElementsByClassName("target");
  for (let i = 0; i<x.length;i++){
      let element = x[i];
      element.innerHTML= "owned";
    
  }

})();
