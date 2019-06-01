function addCol() {
  let col = document.getElementById("myRow");
  let colCell = col.insertCell(0);
  colCell.innerHTML;
}

function addRow() {
  let row = document.getElementById("myRow");
  let rowCell = row.insertCell(0);
  rowCell.innerHTML;
}

function deleteCol() {
  let delCol = document.getElementById("myRow");
  let delColCell = delCol.deleteCell(-1); /*deleteRow is func*/
  delColCell.innerHTML;
}

function deleteRow() {
  let delRow = document.getElementById("myRow");
  let delRowCell = delRow.deleteCell(-1);
  delRowCell.innerHTML;
}

/* MARIN EXPERIMENTATION */

/* VARIABLES */

let ROWS = 0;
let COLS = 0;

/* FUNCTIONS */

const appendRow = () => {
  console.log("INSERTION");
  let newRow = document.createElement("tr");

  if (COLS === 0) {
    let newPixel = document.createElement("td");
    newPixel.style.backgroundColor = "white";
    newRow.appendChild(newPixel);
    COLS++;
  } else {
    for (let i = 0; i < COLS; i++) {
      let newPixel = document.createElement("td");
      newPixel.style.backgroundColor = "white";
      newRow.appendChild(newPixel);
    }
  }

  let table = document.getElementById("grid");
  table.appendChild(newRow);

  ROWS++;
  console.log("ROWS: " + ROWS + " COLS: " + COLS);
};

const removeRow = () => {
  console.log("DELETION");
  if (ROWS > 0 && COLS > 0) {
    document.getElementById("grid").deleteRow(ROWS - 1);
    ROWS--;
    if (ROWS === 0) {
      COLS = 0;
    }
  }
  console.log("ROWS: " + ROWS + " COLS: " + COLS);
};

const appendCol = () => {
  console.log("INSERTION");
  if (ROWS === 0) {
    let newRow = document.createElement("tr");
    let newCol = document.createElement("td");
    newCol.style.backgroundColor = "white";
    newRow.appendChild(newCol);
    document.getElementById("grid").appendChild(newRow);
    ROWS++;
  } else {
    for (let i = 0; i < ROWS; i++) {
      let currRow = document.getElementById("grid").rows[i];
      let newPixel = document.createElement("td");
      newPixel.style.backgroundColor = "white";
      currRow.appendChild(newPixel);
    }
  }

  COLS++;
  console.log("ROWS: " + ROWS + " COLS: " + COLS);
};

const removeCol = () => {
  console.log("DELETION");
  if (COLS > 0 && ROWS > 0) {
    for (let i = 0; i < ROWS; i++) {
      let currRow = document.getElementById("grid").rows[i];
      let colToDelete = currRow.lastChild;
      currRow.removeChild(colToDelete);
    }
    COLS--;
    if (COLS === 0) {
      for (let i = 0; i < ROWS; i++) {
        document.getElementById("grid").deleteRow(0);
        ROWS = 0;
      }
    }
  }
  console.log("ROWS: " + ROWS + " COLS: " + COLS);
};
