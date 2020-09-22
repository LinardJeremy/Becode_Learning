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

 let x= new Rectangle(3,4,5,3);
 let y= new Rectangle(3,7,7,8);
 let z= new Rectangle(3,4,5,3);
 let tt= new Rectangle(10,5,12,15);
 console.log(x.collides(y));
 console.log(x.collides(z));
 console.log(x.collides(tt));


//  lenght = topX + length = earlyx
// width = topy - width = bottomY

