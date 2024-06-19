const container = document.querySelector(".container");
const resizer = document.querySelector(".resizer");

const squares = [];

// let input = 29.5;

let input = 16;

let basis = 0;

basis = 500 / input;

let height = 0;
let width = 0;

// if ((input * input) % 2 == 0) {}
height = (500 / input)-2;
width = (500 / input)-2;

// height = 500 / (input+1);
// width = 500 / (input+1)
// console.log(basis);

// height = (input / 500) * 100;
// width = (input / 500) * 100;

const r = document.querySelector(":root");
r.style.setProperty("--square-height", `${height}px`);
r.style.setProperty("--square-width", `${width}px`);
r.style.setProperty("--square-basis", `${basis}px`);

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
        newInput = parseInt(prompt());
        console.log(newInput);
        if (isNaN(newInput)) {
            console.log(newInput);
            return;
        }
    }

    let product = newInput * newInput;
    let index = 0;

    if (input > newInput) {
        index = (squares.length-1) - product;
        input = newInput;
        for (let i = 0; i <= index; i++) {
            container.removeChild(container.lastElementChild);
            squares.pop();
        }
        for (const square of squares) {
            square.style.cssText = "background-color: none;"
            // square.classList.remove("active");
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
        for (const square of squares) {
            square.style.cssText = "background-color: none;"
            // square.classList.remove("active");
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

    height = (500 / newInput)-2;
    width = (500 / newInput)-2;
    console.log(width);
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
                // square.classList.add("active");
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
