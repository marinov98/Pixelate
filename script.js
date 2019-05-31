
function addRow() {
    let row = document.getElementById("myRow"); 
    let rowCell = row.insertCell(0); 
    rowCell.innerHTML; 
}

function addCol() {
    let col = document.getElementById("myRow"); 
    let colCell = col.insertCell(0); 
    colCell.innerHTML; 
}

function deleteRow() {
    let delRow = document.getElementById("myRow"); 
    let delRowCell = delRow.deleteCell(-1); /*deleteRow is func*/ 
    delRowCell.innerHTML; 
}

function deleteCol() {
    let delCol = document.getElementById("myRow"); 
    let delColCell = delCol.deleteCell(-1); 
    delColCell.innerHTML; 
}