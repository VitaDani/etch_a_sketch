let container = document.querySelector(".container");
let row_column = 16;
let square_width = container.computedStyleMap().get('width')['value'] / row_column;
let square_height = container.computedStyleMap().get('height')['value'] / row_column;

for (let i = 0; i < row_column; i++) {
    for (let j = 0; j < row_column; j++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${square_width}px`;
        square.style.height = `${square_height}px`;
        container.appendChild(square);
    }
}
console.log(square_width);