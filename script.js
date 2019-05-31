
const addRow = () => {
    let row = document.getElementById("addRow"); 
    let rowCell = row.insertCell(0); 
    rowCell.innerHTML; 
}

const addCol = () => {
    let col = document.getElementById("cols"); 
    let colCell = col.insertCell(0); 
    colCell.innerHTML; 
}

const deleteRow = () => {
    let delRow = document.getElementById("deleteRow"); 
    let delRowCell = delRow.deleteRow(0); /*deleteRow is func*/ 
    delRowCell.innerHTML; 
}

const deleteCol = () => {
    let delCol = document.getElementById("deleteCol"); 
    let delColCell = delCol.deleteCol(0); 
    delColCell.innerHTML; 
}