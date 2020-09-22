let min = 1;
    let max= 10;


function rand10(min, max) {
    min=Math.ceil(min);
    max= Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;

}
console.log(rand10(min,max));