//Merci à Bastien Dewerse à qui j'ai volé le bout de code pour faire cet exo, sans ça je n'aurais jamais pu le faire. 


class Rectangle {
    constructor(topLeftXpos, topLeftYpos, width, length) {
    this.topLeftXpos = topLeftXpos;
    this.topLeftYpos= topLeftYpos;
    this.width = width;
    this.length= length;
}
 collides(otherRectangle) {
    if (this.topLeftXpos < otherRectangle.topLeftXpos + otherRectangle.width &&
        this.topLeftXpos + this.width > otherRectangle.topLeftXpos &&
        this.topLeftYpos < otherRectangle.topLeftYpos + otherRectangle.length &&
        this.length + this.topLeftYpos > otherRectangle.topLeftYpos) {
     
        return true ; 
    }
    else {
        return false;
    }
 }
 }
 function random(x) {
    return Math.round(Math.random()*x);
}

function collidingRandRect(n) {
    let rectArray = [];
    let rectColliding = [];
    for (let i = 0; i < n; i++) {
        rectArray[i] = new Rectangle(random(500), random(500), random(10), random(10));
        for (let j = 0; j < i; j++) {
            if ( rectArray[i].collides(rectArray[j]) ) {
                rectColliding.includes(rectArray[i]) || rectColliding.push(rectArray[i]);
                rectColliding.includes(rectArray[j]) || rectColliding.push(rectArray[j]);
            } 
        }
    }
    return rectColliding;
}

let rectColliding = collidingRandRect(1000)
console.log(rectColliding);
console.log("Total = " + rectColliding.length);