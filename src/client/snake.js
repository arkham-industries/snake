export class Snake {

    constructor(initialBodySegmentArray) {
      this.bodySegments = initialBodySegmentArray;
    }

    /**
     * Moves the snake forward.
     * @param {*} delta x,y movement values, e.g. [0,1] moves the snake up one in the y direction
     */
    move(delta){

      const xDelta = delta[0];  // -1,0,1
      const yDelta = delta[1];  // -1,0,1

      this.bodySegments.pop(); //removes tail
      
      const oldHead = this.bodySegments[0];
      const newHead = [
        oldHead[0] + xDelta,  
        oldHead[1] + yDelta
      ];

      this.bodySegments.unshift(newHead); //adds new head in direction of movement from old head point
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