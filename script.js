// Sets default grid size and builds
let gridSize = 16;
buildGrid(gridSize);

// Allows grid size to be changed then rebuilds
const gridSizeSelect = document.querySelector("#gridSizeSelect");
gridSizeSelect.addEventListener("click", () => {
    let tempGrid = prompt("Set the grid to this many boxes wide and tall:");
    tempGrid = Number(tempGrid);
    if (Number.isInteger(tempGrid) && tempGrid > 0 && tempGrid <= 70) {
        gridSize = tempGrid;
        buildGrid(gridSize);
    }
    else {
        alert("Invalid input... try again? Keep the size smaller than 70, please.")
    }
});

// Turns all squares white to reset them
const clearGrid = document.querySelector("#clearGrid");
clearGrid.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = "#ffffff";
    })
});

// Generates grid based on current grid size
function buildGrid() {
    // Clears the grid before potential rebuild
    const grid = document.querySelector("#grid");
    grid.innerHTML = "";

    // Creates a row for every grid size
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        grid.appendChild(row);
        // Populates each row with as many squares as grid size
        for (let i = 0; i < gridSize; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
            square.addEventListener('mouseover', turnBlack);
        }
    }
}

// Sets color of squares when moused over
function turnBlack(event) {
    event.target.style.backgroundColor = "#000000";
}