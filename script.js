//SQUARES DON'T FILL UP THE AVAILABLE AREA PERFECTLY.

const containerSize = 910;
const container = document.querySelector(".container");
const btn = document.querySelector("button");
let specificDimension = false;

container.style.width = `${containerSize}px`;
container.style.height = `${containerSize}px`;

let dimension = 16;
let numSquares = dimension*dimension; // 16x16 grid

let sqArr = new Array(numSquares);

if(!specificDimension) populateGrid(numSquares, dimension);

function handleDimension() {
    specificDimension = true;
    let sqs = prompt("enter dimension");
    if (sqs>50) sqs=50;
    sqArr.length = 0;
    dimension = sqs;
    numSquares = sqs*sqs;
    deleteSquares();
    populateGrid(numSquares, sqs);
}

function deleteSquares() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function populateGrid(numSquares, dimension) {
    for(let i = 0; i<numSquares; i++) {
        const sqDiv = document.createElement("div");
        container.appendChild(sqDiv);

        let squareSize = containerSize/dimension;
        sqArr.push(sqDiv);
        sqDiv.setAttribute("id", "sq" + String(i)); // set unique number ID to each square
        sqDiv.setAttribute("class", "square");
        sqDiv.setAttribute("style", `width: ${squareSize}px; height: ${squareSize}px;`); // changed this
        sqDiv.style.boxSizing = "border-box";
        if(!(i >= (numSquares-dimension))) sqDiv.style.borderBottom = "0px";
    }
}



function handleHover(e) {
    const square = e.target;
    // console.log(square.className);

    let bgColor = window.getComputedStyle(square).backgroundColor;
    // Extract RGBA values using regex
    let match = bgColor.match(/rgba?\((\d+), (\d+), (\d+),? ([\d.]+)?\)/);
    if (!match) return; // If no match, exit

    let r = match[1], g = match[2], b = match[3];
    let alpha = match[4] !== undefined ? parseFloat(match[4]) : 1; // Default to 1 if missing
    if(square.className == "square" && alpha != 0) {
        alpha = Math.min(alpha + 0.1, 1);
        square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    else if(square.className == "square") {
        let r = Math.random()*256;
        let g = Math.random()*256;
        let b = Math.random()*256;
        console.log(r, g, b)
        square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, .1)`;
    }
}

container.addEventListener("mouseover", (e) => handleHover(e));
btn.addEventListener("click", handleDimension);
