let firstArray = [1,2,3,4,5];
let secondArray = [100, 101, 102];

let x = 0;

for(let elem of firstArray){
    x = x + elem;
}
console.log(x / firstArray.length);

let y = 0;

for(let elem of secondArray){
    y= y + elem ;
}
console.log(y/ secondArray.length);