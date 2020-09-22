// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {

    // your code here
    let slide = document.getElementById('slider');
    let txt = document.getElementById('target');
    let valueMin = slide.getAttribute('min');
    let valueMax = slide.getAttribute('max');

    console.log(valueMin);
    slide.addEventListener("input", function() {
      txt.innerHTML= "0"+this.value;
    });

})();
