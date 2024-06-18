const container = document.querySelector(".container");
const resizer = document.querySelector(".resizer");

const squares = [];

let input = 16;

let height = 500 / input;
let width = 500 / input;

const r = document.querySelector(":root");
r.style.setProperty("--square-height", `${height}px`);
r.style.setProperty("--square-width", `${width}px`);

// function addSquares(index) {
//     const square = document.createElement("div");
//     square.classList.add("square");
//     container.appendChild(square);
//     squares.push(square);
//     square.textContent = box;
//     box++;
// }

resizer.addEventListener("click", (e) => {
    // let newInput = parseInt(prompt());
    let newInput = 0;
    while (newInput <= 0 || newInput >= 101) {
        newInput = prompt();
        if (newInput === null) {
            return;
        }
    }

    let product = newInput * newInput;
    let index = 0;

    // get new input and compare with the original input and if it's bigger add <p>s if it's smaller pop() out elements
    // subtract newInput from input to get how much to pop() out and subtract input from newInput to get how much to add

    // ACTUALLY input should be a base for the multiplication for example input = 9 then 9 x 9 and the product of which will be the number of squares

    if (input > newInput) {
        index = (squares.length-1) - product;
        input = newInput;
        for (let i = 0; i <= index; i++) {
            container.removeChild(container.lastElementChild);
            squares.pop();
        }
    } else if (input < newInput) {
        input = newInput;
        index = product - (squares.length-1);
        for (let i = 1; i < index; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            container.appendChild(square);
            squares.push(square);
            // square.textContent = box;
            // box++;
        }
    }

    // if (input < newInput && newInput < 100) {
    //     index = newInput - input;
    //     for (let i = 0; i < index; i++) {
    //         const square = document.createElement("div");
    //         square.classList.add("square");
    //         container.appendChild(square);
    //         squares[index] = square;
    //         index++;
    //     }

    console.log(squares.length);

    height = 500 / newInput;
    width = 500 / newInput;
    r.style.setProperty("--square-height", `${height}px`);
    r.style.setProperty("--square-width", `${width}px`);
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
        // square.textContent = box;
        // box++;
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
