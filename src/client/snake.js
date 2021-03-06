export class Snake {

    head = null;  // reference to the head of the snake, is a [x,y] coordinate
    bodySegments = []; // all body segements of the snake as [x,y]s
    facingDirection = null; //x,y movement values, e.g. [0,1] moves the snake up one in the y direction

    constructor(initialBodySegmentArray, initialFacingDirection) {
      this.bodySegments = initialBodySegmentArray;
      this.head = this.bodySegments[0];
      this.facingDirection = initialFacingDirection;
    }

    move(){

      const xDelta = this.facingDirection[0];  // values are -1,0,1
      const yDelta = this.facingDirection[1];  // values are -1,0,1

      this.bodySegments.pop(); //removes tail
      
      const oldHead = this.bodySegments[0];
      const newHead = [
        oldHead[0] + xDelta,  
        oldHead[1] + yDelta
      ];

      this.bodySegments.unshift(newHead); //adds new head in direction of movement from old head point
      this.head = newHead;
      console.log('moving snake', JSON.stringify(this.bodySegments));
    }

}

/*class point {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
}*/


// worldHeight = grid.grid.height
//worldWidth = grid.grid.width







  // function Eat(point apple){
  //   body.unshift(apple);
  // }