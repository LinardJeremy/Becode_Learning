class circle {
    constructor (xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    move(xOffset, yOffset){
        this.xPos =  xOffset;
        this.yPos =  yOffset;
    }
    get surface() {
       return Math.PI * (this.radius*this.radius);
    }
}
let test = new circle(1,1,5);
test.move(3,1);
console.log(test);
console.log("surface du cercle " + test.surface);
// lol je suis pas sûr d'avoir compris ce qu'on demandait mais bon ^^