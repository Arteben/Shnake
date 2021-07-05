
const smiles = {
    width: 10,
    height: 9,
    joy: [
        [[3, 4]],
        [[1, 8]],
        [[1, 1], [4, 2], [8, 1]],
        [[0, 2], [4, 2], [8, 2]],
        [[0, 10]],
        [[0, 2], [3, 4], [8, 2]],
        [[1, 2], [7, 2]],
        [[1, 8]],
        [[3, 4]]
    ],
    evil: [
        [[3, 4]],
        [[1, 8]],
        [[1, 8]],
        [[0, 2], [4, 2], [8, 2]],
        [[0, 10]],
        [[0, 10]],
        [[0, 3], [7, 2]],
        [[1, 8]],
        [[3, 4]]
    ],
    getClassPoint (_mask, _row, _x) {
        let classPoint = '';

        if (!Array.isArray(this[_mask])) return classPoint;
        if (!Array.isArray(this[_mask][_row])) return classPoint;

        for (const _part of this[_mask][_row]) {
            const isIncluded = (_x > _part[0] && _x <= Number(_part[0] +_part[1]));
            if (isIncluded) {
                classPoint = 'js-smile';
                break;
            }
        }
        return classPoint
    }
}

const setClasses = (_el, _classes = []) => {
    _el.classList.remove(..._el.classList)
    _el.classList.add(..._classes)
}
class Snake {
    constructor(_rootDivName, _width, _height) {
        this.root = document.querySelector(_rootDivName);
        this.gameWidth = _width;
        this.gameHeight = _height;
        this.gridLength = this.gameWidth * this.gameHeight;
        this.grid = [];
        this.createGrid();
    }

    createGrid () {
        const cellWidth = `${100/this.gameWidth}%`;
        for (let i = 0; i < this.gridLength; i++) {
            const cell = document.createElement('div');
            setClasses(cell, ['cell']);
            cell.style.width = cellWidth;
            this.root.append(cell);
            this.grid.push(cell);
        }
        // this.drawSmaile('evil');
        this.drawSmaile('joy');
    }

    drawSmaile (_type) {
        const getBegin = (_hole, _el) => Math.round((_hole - _el) / 2);
        const beginRowSmile = getBegin(this.gameHeight, smiles.height);
        const beginWidthSmilePoint = getBegin(this.gameWidth, smiles.width);
        this.grid.forEach((_element, _idx) => {
            setClasses(_element, ['cell']);
            _element.removeAttribute('smile');
            const row = Math.ceil(_idx / this.gameWidth) - beginRowSmile;
            const numEl = Math.round(_idx % this.gameWidth) - beginWidthSmilePoint;
            if (row >= 0 && numEl >= 0) {
               const pointClass = smiles.getClassPoint(_type, row, numEl);
               if (pointClass) {
                    setClasses(_element, ['cell', pointClass]);
                    _element.setAttribute('smile', 'true');
               }
            }
        })
    }
}

const snake = new Snake('.js-game', 100, 50);
