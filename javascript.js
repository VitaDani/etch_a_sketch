/* Setting the variables for the flex container and what will be used to determine
   the grid squares' width and height */
let container = document.querySelector(".container");

// Create the function that makes the grid of div squares
function createGrid(row_column = 16) {
    let square_width = container.computedStyleMap().get('width')['value'] / row_column;
    let square_height = container.computedStyleMap().get('height')['value'] / row_column;
    
    for (let i = 0; i < row_column; i++) {
        for (let j = 0; j < row_column; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.width = `${square_width}px`;
            square.style.height = `${square_height}px`;
            container.appendChild(square);
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "black";
            });
        }
    }
}

// Make the edit button clickable and asks for input
let grid_size = document.querySelector("#grid_size");

grid_size.addEventListener("click", () => {
    let user_input = prompt("What size would you like your grid? (1 - 100)");
    if (user_input > 100 || user_input < 1) {
        alert("The number you have chosen is not within parameters");
        exit;
    }
    container.replaceChildren();
    createGrid(user_input);
});

createGrid();