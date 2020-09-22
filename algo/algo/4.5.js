function sqr(a){
    return a*a;
}

function calcDistance(x1, y1, x2, y2){
    return Math.sqrt(sqr(y2-y1)+ sqr(x2-x1));
}
console.log(calcDistance(1,1,2,2));
console.log(calcDistance(1,1,3,1));
console.log(calcDistance(4,1,1,1));
console.log(calcDistance(-2,2,2,-2));