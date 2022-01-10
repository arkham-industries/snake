import { Grid } from './grid.js';
import { Snake } from './snake.js';

export class App {
    
    constructor(appEl) {
        this.appEl = appEl;
    }

    start() {
        const worldHeight = 20;
        const worldWidth = 20;
        const grid = new Grid(this.appEl, worldHeight, worldWidth);
        console.log('game started!', grid);
        grid.render();

        const snakeBodySegments = this.getInitialSnakeBodySegements(worldHeight, worldWidth);
        const snake = new Snake(snakeBodySegments);
        console.log('got a snake!', snake);
    }

    getInitialSnakeBodySegements(worldHeight, worldWidth){ //spawns a length 2 snake at random point
        const spawnX = Math.floor(Math.random() * worldHeight);
        const spawnY = Math.floor(Math.random() * worldWidth);
        const bodySegments = [];
        bodySegments.push([spawnX,spawnY]);
      
        if(Math.round(Math.random)){
            if(Math.round(Math.random)){ //if 0 use X
                bodySegments.push([spawnX + 1, spawnY]); //+1 to X
            } else {
                bodySegments.push([spawnX - 1, spawnY]);//-1 to X
            }
        } else {
            if(Math.round(Math.random)){ //if 0 use Y
                bodySegments.push([spawnX, spawnY + 1]); //+1 to Y
            } else {
                bodySegments.push([spawnX, spawnY -1]);//-1 to Y
            }
        }
    
        return bodySegments;
    }
}