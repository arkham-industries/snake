import { Grid } from './grid.js';
import { Snake } from './snake.js';

const directions = {
    up: [-1, 0],
    down: [1,0],
    left: [0,-1],
    right: [0,1]
}

export class App {
    
    gameOver = false;

    constructor(appEl) {
        this.appEl = appEl;
    }

    start(speed = 5) {
        const worldHeight = 20;
        const worldWidth = 20;

        this.grid = new Grid(this.appEl, worldHeight, worldWidth);
        console.log('game started!', this.grid);
        this.grid.render();

        const snakeBodySegments = this.getInitialSnakeBodySegements(worldHeight, worldWidth);
        this.snake = new Snake(snakeBodySegments, directions.down);

        // render inital position of screen
        this.grid.colorCells(this.snake.bodySegments, '#f00');

        // update the screen
        this.updateInterval = window.setInterval(() => {
            this.update();
        }, 1/speed * 1000);

        this.listenForKeyboard();
    }

    /**
     * Updates the game state on the screen.
     */
    update() {
        console.log('updating the game!', this.snake);

        
        // updating the game state
        this.snake.move();

        //check if snake is moving out of bounds
        if((this.snake.head[0]) > this.grid.width-1
        || (this.snake.head[0]) < 0
        || (this.snake.head[1]) > this.grid.height-1
        || (this.snake.head[1]) < 0){
            this.endGame();
            return;
        }
    
        //check if new location is part of body
        //gameover
    
        //check if apple is on target point
        /*if((body[0] + direction).comtainsApple){
            Eat();
            return;
        }*/
  
        // render the game state
        this.grid.reset();
        this.grid.colorCells(this.snake.bodySegments, '#f00');
        this.grid.colorCells([this.snake.head], '#0f0');
    }

    listenForKeyboard(){
        document.addEventListener('keydown', (event)=>{
            console.log(event);
            if(event.code == 'ArrowUp'){
                this.snake.facingDirection = directions.up;
            } else if(event.code == 'ArrowDown'){
                this.snake.facingDirection = directions.down;
            } else if(event.code == 'ArrowLeft'){
                this.snake.facingDirection = directions.left;
            } else if(event.code == 'ArrowRight'){
                this.snake.facingDirection = directions.right;
            }
        })
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

    endGame(){
        this.gameOver = true;
        console.log("Game over man");
        window.clearInterval(this.updateInterval);
    }
}