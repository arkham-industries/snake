export class Grid {

    constructor(appEl, height, width) {
        this.appEl = appEl;
        this.width = width;
        this.height = height;
    }

    render() {
        this.table = document.createElement('table');
        this.table.classList.add("game-grid");
        for(let y=0; y<this.height; y++) {
            const row = document.createElement('tr');
            this.table.append(row);
            for(let x=0; x<this.width; x++) {
                const cell = document.createElement('td');
                row.append(cell);
            }
        }
        this.appEl.append(this.table);
    }

    /**
     * This method colors the cells in a specified color value.
     * @param {*} cellArray an array of tuples, e.g. [[1,2],[0,2]]
     * @param {*} color is a rgb color, e.g. #f00
     */
    colorCells(cellArray, color) {
        cellArray.forEach((cellCoordinates) => {
            const tableRow = this.table.children.item(cellCoordinates[0]);
            const tableCell = tableRow.children.item(cellCoordinates[1]);
            tableCell.style.backgroundColor = color;
        });
    }
}

