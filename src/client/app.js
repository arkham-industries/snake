import { Grid } from './grid.js';
import { Snake } from './snake.js';

export class App {
    
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
        this.grid.colorCells(this.snake.bodySegments, '#f00');
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