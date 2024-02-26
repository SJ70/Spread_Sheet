const size = 5;

const spreadSheetContainerEl = document.getElementById("spreadsheet-container");
const cells = [];

console.log(cells);

createSpreadSheet(spreadSheetContainerEl, cells);

function createSpreadSheet(containerEl, cellsArr) {

    for (let r = 0; r < size; r++) {

        const rowEl = document.createElement('div');
        rowEl.classList.add('spreadsheet-row');
        containerEl.appendChild(rowEl);
        let row = [];

        for (let c = 0; c < size; c++) {

            const cellEl = document.createElement('input');
            cellEl.classList.add('cell');
            rowEl.appendChild(cellEl);
            row.push(cellEl);

            if (r == 0 || c == 0) {
                cellEl.classList.add('uneditable');
                cellEl.disabled = true;
            }
            if (r == 0 && c > 0) {
                cellEl.value = String.fromCharCode('A'.charCodeAt() + c - 1);
            }
            if (r > 0 && c == 0) {
                cellEl.value = r;
            }

        }

        cellsArr.push(row);

    }

}