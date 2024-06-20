const container = document.querySelector(".container");
const resizer = document.querySelector(".resizer");
const cleaner = document.querySelector(".cleaner");

const form = document.querySelector("form");

const squares = [];


function addSquares() {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
    squares.push(square);
}

function cleanSquares() {
    for (const square of squares) {
        square.style.cssText = "background-color: none;"
    }
}

let input = 16;

let height = 0;
let width = 0;

for (let i = 0; i < input; i++) {
    for (let j = 0; j < input; j++) {
        addSquares();
    }
}

console.log(squares.length);

height = (500 / input)-2;
width = (500 / input)-2;

const r = document.querySelector(":root");
r.style.setProperty("--square-height", `${height}px`);
r.style.setProperty("--square-width", `${width}px`);

cleaner.addEventListener("click", (e) => {
    cleanSquares();
})

resizer.addEventListener("click", (e) => {
    let newInput = 0;
    while (newInput <= 1 || newInput >= 101) {
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
        cleanSquares();
    } else if (input < newInput) {
        input = newInput;
        index = product - (squares.length-1);
        for (let i = 1; i < index; i++) {
            addSquares();
        }
        cleanSquares();
    }

    console.log(squares.length);

    height = (500 / newInput)-2;
    width = (500 / newInput)-2;
    console.log(width);
    r.style.setProperty("--square-height", `${height}px`);
    r.style.setProperty("--square-width", `${width}px`);
});

// let opacity = 0.1;

container.addEventListener("mouseenter", (e) => {
    for (const square of squares) {
        if (square != undefined) {
            square.addEventListener("mouseover", (e) => {
                if (document.getElementById("modeTwo").checked) {
                    let red = Math.floor(Math.random() * 255);
                    let green = Math.floor(Math.random() * 255);
                    let blue = Math.floor(Math.random() * 255);
                    square.style.cssText = `background-color: rgb(${red}, ${green}, ${blue});`
                } else if (document.getElementById("modeThree").checked) {
                    // if (square.style.cssText !== "background-color: black; opacity: 100%;") {
                    // square.style.cssText = `background-color: black; opacity: ${opacity}%`;
                    // square.style.cssText = "background-color: black; opacity: 10%;";

                    // let style = getComputedStyle(square);
                    // console.log(style.getPropertyValue("opacity"));
                    // let value = parseInt(style.getPropertyValue("opacity"));

                    // let opacity = 0.1;

                    // let newOpacity = opacity;

                    console.log(square.style.backgroundColor);

                    // if (square.style.backgroundColor === "") {
                    //     opacity = 0.1;
                    // }

                    // square.style.cssText =
                    // `background-color: rgba(0, 0, 0, ${opacity});`;

                    let value = square.style.backgroundColor;
                    console.log(value);

                    if (value !== "" && value !== "rgba(0, 0, 0)") {
                        switch (value) {
                            case "rgba(0, 0, 0, 0.1)":
                                square.style.cssText =
                                `background-color: rgba(0, 0, 0, 0.2);`;
                                break;
                            case "rgba(0, 0, 0, 0.2)":
                                square.style.cssText =
                                `background-color: rgba(0, 0, 0, 0.3);`;
                                break;
                            case "rgba(0, 0, 0, 0.3)":
                                square.style.cssText =
                                `background-color: rgba(0, 0, 0, 0.4);`;
                                break;
                            case "rgba(0, 0, 0, 0.4)":
                                square.style.cssText =
                                `background-color: rgba(0, 0, 0, 0.5);`;
                                break;
                            case "rgba(0, 0, 0, 0.5)":
                                square.style.cssText =
                                `background-color: rgba(0, 0, 0, 0.6);`;
                                break;
                            case "rgba(0, 0, 0, 0.6)":
                                square.style.cssText =
                                `background-color: rgba(0, 0, 0, 0.7);`;
                                break;
                            case "rgba(0, 0, 0, 0.7)":
                                square.style.cssText =
                                `background-color: rgba(0, 0, 0, 0.8);`;
                                break;
                            case "rgba(0, 0, 0, 0.8)":
                                square.style.cssText =
                                `background-color: rgba(0, 0, 0, 0.9);`;
                                break;
                            case "rgba(0, 0, 0, 0.9)":
                                square.style.cssText =
                                `background-color: rgba(0, 0, 0, 1);`;
                                break;
                        }
                    } else {
                        square.style.cssText =
                        `background-color: rgba(0, 0, 0, 0.1);`;
                    }
                    // console.log(opacity);
                } else {
                    square.style.cssText = "background-color: grey;";
                }
            });
        }
    }
});
