const container = document.querySelector(".container");

const squares = [];
let index = 0;

// const elements = [];
// let box = 1;

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
        squares[index] = square;
        index++;

        // square.textContent = box;
        // box++;
        // elements[(i+1)*(j+1)] = square;
    }
}

console.log(squares[0]);
console.log(squares.length);

container.addEventListener('mouseenter', (e) => {
    for (const square of squares) {
        if (square != undefined) {
            square.addEventListener('mousemove', (e) => {
                square.style.cssText = "background-color: grey;";
            });
        }
    }
});

// console.log(elements.length);

// const square = document.querySelector(".square");

// square.addEventListener("mousemove", () => {
//     square.style.cssText = "background-color: grey;"
// });

// function colorSquare(element) {
//     element.style.cssText = "background-color: grey;"
// }
