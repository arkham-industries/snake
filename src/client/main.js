import { App } from './app.js';
import { Grid } from './grid.js';

console.log('hello world from js!');


const appEl = document.querySelector('.app');
const grid = new Grid(appEl, 20, 20);
console.log('here is  my grid', grid);
grid.render();

const app = new App();
app.start();