/* VARIABLES */

let ROWS = 0;
let COLS = 0;

/* variables for color changes */

let color = "red";
let trigger = false;

/* FUNCTIONS */

//
/// ROW METHODS
//

const appendRow = () => {
  let newRow = document.createElement("tr");

  // edgecase where table is empty
  if (COLS === 0) {
    let newPixel = document.createElement("td");
    newPixel.style.backgroundColor = "white";
    newRow.appendChild(newPixel);

    // events for color change on click
    newPixel.addEventListener("mousedown", function(e) {
      this.style.backgroundColor = color;
    });

    newPixel.addEventListener("mouseover", function(e) {
      //e.preventDefault();
      if (trigger === true) {
        this.style.backgroundColor = color;
      }
    });

    COLS++;
  } else {
    // general case
    for (let i = 0; i < COLS; i++) {
      let newPixel = document.createElement("td");
      newPixel.style.backgroundColor = "white";
      newRow.appendChild(newPixel);

      // events for color change on click
      newPixel.addEventListener("mousedown", function(e) {
        this.style.backgroundColor = color;
      });

      newPixel.addEventListener("mouseover", function(e) {
        //e.preventDefault();
        if (trigger === true) {
          this.style.backgroundColor = color;
        }
      });
    }
  }

  // append fully filled row to the table
  let table = document.getElementById("grid");
  table.appendChild(newRow);

  ROWS++;

  //selectedIndex passed from select tag
  const currColor = document.getElementById("selector");
  color = currColor.options[currColor.selectedIndex].value;
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
};

///
// COL METHODS
///

const appendCol = () => {
  // edgecase when table is empty
  if (ROWS === 0) {
    let newRow = document.createElement("tr");
    let newPixel = document.createElement("td");
    newPixel.style.backgroundColor = "white";
    newRow.appendChild(newPixel);
    document.getElementById("grid").appendChild(newRow);

    newPixel.addEventListener("mousedown", function(e) {
      this.style.background = color;
    });

    newPixel.addEventListener("mouseover", function(e) {
      // e.preventDefault();
      if (trigger === true) {
        this.style.backgroundColor = color;
      }
    });

    ROWS++;
  } else {
    // general case
    for (let i = 0; i < ROWS; i++) {
      let currRow = document.getElementById("grid").rows[i];
      let newPixel = document.createElement("td");
      newPixel.style.backgroundColor = "white";
      currRow.appendChild(newPixel);

      // events for color change on click
      newPixel.addEventListener("mousedown", function(e) {
        this.style.backgroundColor = color;
      });

      newPixel.addEventListener("mouseover", function(e) {
        // e.preventDefault();
        if (trigger === true) {
          this.style.backgroundColor = color;
        }
      });
    }
  }

  COLS++;

  // color changes from selector drop down
  const currColor = document.getElementById("selector");
  color = currColor.options[currColor.selectedIndex].value;
};

const removeCol = () => {
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
};

/* BOTTOM BUTTONS */

const setColor = value => {
  let setColor = document.getElementById("selector");
  color = setColor.options[setColor.selectedIndex].value;
};

// FILLBUTTONS

function fillAll() {
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      let currPixel = grid.rows[i].cells[j];
      let pixelColor = currPixel.style.backgroundColor;
      currPixel.style.backgroundColor = color;
    }
  }
}

function fillEmpty() {
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      let currPixel = grid.rows[i].cells[j];
      let pixelColor = currPixel.style.backgroundColor;
      //if pixel is white then change to color
      if (pixelColor === "white") {
        currPixel.style.backgroundColor = color;
      }
    }
  }
}

// CLEAR BUTTOM

const clearGrid = () => {
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      let currPixel = grid.rows[i].cells[j];
      currPixel.style.backgroundColor = "white";
    }
  }
};

/* Restructuring With addEventListener */

window.onload = function() {
  /* ROWS */
  document.getElementById("addRow").addEventListener("click", appendRow);
  document.getElementById("deleteRow").addEventListener("click", removeRow);

  /* COLS */
  document.getElementById("addCol").addEventListener("click", appendCol);
  document.getElementById("deleteCol").addEventListener("click", removeCol);

  /*
      BOTTOM BUTTONS: 
  */

  // FILL BUTTONS
  document.getElementById("fillAll").addEventListener("click", fillAll);
  document.getElementById("fillEmpty").addEventListener("click", fillEmpty);

  // CLEAR BUTTON
  document.getElementById("erase").addEventListener("click", clearGrid);

  // TRIGGERS
  document.getElementById("selector").addEventListener("click", setColor);

  document.addEventListener("mousedown", function() {
    trigger = true;
  });

  document.addEventListener("mouseup", function() {
    trigger = false;
  });
};

//https://stackoverflow.com/questions/48593312/javascript-event-when-mouseover-and-mousedown
