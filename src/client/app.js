import { Grid } from './grid.js';
import { Snake } from './snake.js';

export class App {
    
    gameOver = false;

    constructor(appEl) {
        this.appEl = appEl;
    }

    start(speed = 1) {
        const worldHeight = 20;
        const worldWidth = 20;

        this.grid = new Grid(this.appEl, worldHeight, worldWidth);
        console.log('game started!', this.grid);
        this.grid.render();

        const snakeBodySegments = this.getInitialSnakeBodySegements(worldHeight, worldWidth);
        this.snake = new Snake(snakeBodySegments);

        // render inital position of screen
        this.grid.colorCells(this.snake.bodySegments, '#f00');

        // update the screen
        window.setInterval(() => {
            this.update();
        }, 1/speed * 1000);
    }

    /**
     * Updates the game state on the screen.
     */
    update() {
        console.log('updating the game!', this.snake);

        // updating the game state
        this.snake.move([1,0]);

        //check if snake is moving out of bounds
        if((this.snake.head[0]) > this.grid.width-1
        || (this.snake.head[0]) < 0
        || (this.snake.head[1]) > this.grid.height-1
        || (this.snake.head[1]) < 0){
    
            this.gameOver = true;
        }
    
        //check if new location is part of body
        //gameover
    
        //check if apple is on target point
        /*if((body[0] + direction).comtainsApple){
            Eat();
            return;
        }*/
  
        if (!this.gameOver) {
            // render the game state
            this.grid.reset();
            this.grid.colorCells(this.snake.bodySegments, '#f00');
        } else {
            // show the user a sad face
            console.log("Game over man");
        }

    }

    getInitialSnakeBodySegements(worldHeight, worldWidth){ //spawns a length 2 snake at random point
        const spawnX = Math.floor(Math.random() * worldHeight);
        const spawnY = Math.floor(Math.random() * worldWidth);
        const bodySegments = [];
        bodySegments.push([spawnX,spawnY]);
      
        if(Math.round(Math.random())){
            if(Math.round(Math.random())){ //if 0 use X
                bodySegments.push([spawnX + 1, spawnY]); //+1 to X
            } else {
                bodySegments.push([spawnX - 1, spawnY]);//-1 to X
            }
        } else {
            if(Math.round(Math.random())){ //if 0 use Y
                bodySegments.push([spawnX, spawnY + 1]); //+1 to Y
            } else {
                bodySegments.push([spawnX, spawnY -1]);//-1 to Y
            }
        }
    
        return bodySegments;
    }
}