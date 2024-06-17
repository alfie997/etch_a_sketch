const container = document.querySelector(".container");

// const elements = [];

// let box = 1;

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        // square.textContent = box;
        // box++;
        container.appendChild(square);
        // elements[i*j] = square;
    }
}

// console.log(elements.length);