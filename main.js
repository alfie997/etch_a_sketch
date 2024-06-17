const container = document.querySelector(".container");
const resizer = document.querySelector(".resizer");

const squares = [];

let input = 16;

let height = 500 / input;
let width = 500 / input;

const r = document.querySelector(":root");
r.style.setProperty("--square-height", `${height}px`);
r.style.setProperty("--square-width", `${width}px`);

resizer.addEventListener("click", (e) => {
    let newInput = parseInt(prompt());
    // if (newInput < 100) {
    //     input = newInput;
    // }
    height = 500 / input;
    width = 500 / input;
    r.style.setProperty("--square-height", `${height}px`);
    r.style.setProperty("--square-width", `${width}px`);
    
    if (input < newInput) {
        input = newInput;
    } else if (input > newInput) {
        input = input - newInput;
    }
});

// const rs = getComputedStyle(r);
// rs.getPropertyValue("--square-height") = height;
// rs.getPropertyValue("--square-width") = width;

// console.log(height);

// const elements = [];
let box = 1;

let index = 0;

for (let i = 0; i < input; i++) {
    for (let j = 0; j < input; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
        squares[index] = square;
        index++;

        // square.style.cssText = `height: ${height}; width: ${width};`;
        // square.style.cssText = "height: 32px; width: 32px;";
        square.textContent = box;
        box++;
        // elements[(i+1)*(j+1)] = square;
    }
}

console.log(squares[0]);
console.log(squares.length);

container.addEventListener("mouseenter", (e) => {
    for (const square of squares) {
        if (square != undefined) {
            square.addEventListener("mousemove", (e) => {
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
