class Snake {
    length = 2;
    body = [];

    render() {

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

function InitialSpawn(){ //spawns a length 2 snake at random point
  let spawnX = Math.floor(Math.random() * worldHeight);
  let spawnY = Math.floor(Math.random() * worldWidth);

  body.push([spawnX,spawnY]);

  if(Math.round(Math.random)){
      if(Math.round(Math.random)){ //if 0 use X
          body.push([spawnX + 1, spawnY]); //+1 to X
      } else {
          body.push([spawnX - 1, spawnY]);//-1 to X
      }
  } else {
      if(Math.round(Math.random)){ //if 0 use Y
          body.push([spawnX, spawnY + 1]); //+1 to Y
      } else {
          body.push([spawnX, spawnY -1]);//-1 to Y
      }
  }


  function Move(delta){ //delta is a point that we want out head to move to

    const xDelta = delta[0];
    const yDelta = delta[1];
      //check if snake is moving out of bounds
    /*if((body[0] + direction).x > worldWidth
    || (body[0] + direction).x < 0
    || (body[0] + direction).y >worldHeight
    || (body[0] + direction).y < 0){

        main.gameOver();
        return
    }*/

    //check if new location is part of body
    //gameover

      //check if apple is on target point
    /*if((body[0] + direction).comtainsApple){
        Eat();
        return;
    }*/

    body.pop(); //removes tail

    let newHead = [body[0][0] + xDelta,
                        body[0][1] + yDelta];
    body.unshift(newHead); //adds new head in direction of movement from old head point
  }


  function Eat(point apple){
    body.unshift(apple);
  }