export class Grid {

    constructor(appEl, width, height) {
        this.appEl = appEl;
        this.width = width;
        this.height = height;
    }

    render() {
        const table = document.createElement('table');
        table.classList.add("game-grid");
        for(let y=0; y<this.height; y++) {
            const row = document.createElement('tr');
            table.append(row);
            for(let x=0; x<this.width; x++) {
                const cell = document.createElement('td');
                row.append(cell);
            }
        }
        this.appEl.append(table);
    }
}

