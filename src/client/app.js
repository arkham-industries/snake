import { Grid } from './grid.js';


export class App {
    
    constructor(appEl) {
        this.appEl = appEl;
    }

    start() {
        const grid = new Grid(this.appEl, 20, 20);
        console.log('game started!', grid);
        grid.render();
    }
}