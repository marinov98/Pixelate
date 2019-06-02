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


/* VARIABLES */

let ROWS = 0;
let COLS = 0;


/* variables for color changes */ 
const selectColor = document.getElementById('selector');
let color = 'red'; 
let mouseDown = 0; 

/* FUNCTIONS */

//
/// ROW METHODS
//

const appendRow = () => {
  console.log("INSERTION");
  let newRow = document.createElement("tr");

  // edgecase where table is empty
  if (COLS === 0) {
    let newPixel = document.createElement("td");
    newPixel.style.backgroundColor = "white";
    newRow.appendChild(newPixel);
    COLS++;
  } else { // general case
    for (let i = 0; i < COLS; i++) {
      let newPixel = document.createElement("td");
      newPixel.style.backgroundColor = "white";
      newRow.appendChild(newPixel);

      // events for color change on click
      newPixel.addEventListener('mousedown', function(event) {
        this.style.backgroundColor = color;
      });
  
      newPixel.addEventListener('mouseover', function(event) {
        if (mouseDown)
          this.style.backgroundColor = color;
      });
    }
  }

  // append fully filled row to the table
  let table = document.getElementById("grid");
  table.appendChild(newRow);


  ROWS++;
  console.log("ROWS: " + ROWS + " COLS: " + COLS);

  //selectedIndex passed from select tag 
  color = selectorColor.options[selectorColor.selectedIndex].value;
  
};


const removeRow = () => {
  console.log("DELETION");
  // delete only if necessary 
  if (ROWS > 0 && COLS > 0) {
    document.getElementById("grid").deleteRow(ROWS - 1);
    ROWS--;
    // edgcase where table has no pixels as a result of deletion
    if (ROWS === 0) {
      COLS = 0;
    }
  }
  console.log("ROWS: " + ROWS + " COLS: " + COLS);
};

///
// COL METHODS
///

const appendCol = () => {
  console.log("INSERTION");
  // edgecase when table is empty
  if (ROWS === 0) {
    let newRow = document.createElement("tr");
    let newCol = document.createElement("td");
    newCol.style.backgroundColor = "white";
    newRow.appendChild(newCol);
    document.getElementById("grid").appendChild(newRow);
    ROWS++;
  } else { // general case
    for (let i = 0; i < ROWS; i++) {
      let currRow = document.getElementById("grid").rows[i];
      let newPixel = document.createElement("td");
      newPixel.style.backgroundColor = "white";
      currRow.appendChild(newPixel);

    // events for color change on click
    newPixel.addEventListener('mousedown', function(event) {
      this.style.backgroundColor = color;
    });

    newPixel.addEventListener('mouseover', function(event) {
      if (mouseDown)
        this.style.backgroundColor = color;
    });

    }
  }

  COLS++;
  console.log("ROWS: " + ROWS + " COLS: " + COLS);
  color = selectorColor.options[selectorColor.selectedIndex].value;
};

const removeCol = () => {
  console.log("DELETION");
  // Ensure deletion even needs to happen
  if (COLS > 0 && ROWS > 0) {
    for (let i = 0; i < ROWS; i++) {
      let currRow = document.getElementById("grid").rows[i];
      let colToDelete = currRow.firstChild;
      currRow.removeChild(colToDelete);
    }
    COLS--;
    // edgcase where table becomes empty as a result of deletion
    if (COLS === 0) {
      for (let i = 0; i < ROWS; i++) {
        document.getElementById("grid").deleteRow(0);
      }
      ROWS = 0;
    }
  }
  console.log("ROWS: " + ROWS + " COLS: " + COLS);
};


/* BOTTOM BUTTONS */

const clearGrid = () => {
  console.log("Clear Grid");

  // clear only when there are row and column pixels
  if (ROWS > 0 && COLS > 0) {
    for (let i = 0; i < ROWS; i++) {
      // delete all rows
      document.getElementById("grid").deleteRow(0);
    }

    // reset rows and columns
    ROWS = 0;
    COLS = 0;
  }

  console.log("ROWS: " + ROWS + " COLS: " + COLS);
}




/* Restructuring With addEventListener */

window.onload = function () {
  /* ROWS */
  document.getElementById("addRow").addEventListener("click", appendRow);
  document.getElementById("deleteRow").addEventListener("click", removeRow);

  /* COLS */
  document.getElementById("addCol").addEventListener("click", appendCol);
  document.getElementById("deleteCol").addEventListener("click", removeCol);
};


 
  /*changing the color based on selector*/ 
  setColor = function(value) {
    let setColor = document.getElementById("selector");
    color= setColor.options[setColor.selectedIndex].value;
  }
  

  /*
      BOTTOM BUTTONS: 
  */

  // FILL BUTTONS
  function fillAllPixels() {
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        let currPixel = grid.rows[i].cells[j];
        let pixelColor = currPixel.style.backgroundColor;
        currPixel.style.backgroundColor = color;
      }
    }
  }

  
  function fillEmptyPixels() {
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        let currPixel = grid.rows[i].cells[j];
        let pixelColor = currPixel.style.backgroundColor;
        //if pixel is white then change to color 
        if (pixelColor == "white"){
            currPixel.style.backgroundColor = color;
        }
      }
    }
  }

  // CLEAR BUTTON
  document.getElementById("erase").addEventListener("click", clearGrid);

//};
