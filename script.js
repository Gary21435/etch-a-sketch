const container = document.querySelector(".container");
let dimension = 16;
let numSquares = dimension*dimension; // 16x16 grid

let sqArr = new Array(numSquares);

for(let i = 0; i<numSquares; i++) {
    const sqDiv = document.createElement("div");
    container.appendChild(sqDiv);

    sqArr.push(sqDiv);
    sqDiv.setAttribute("id", "sq" + String(i)); // set unique number ID to each square
    sqDiv.setAttribute("class", "square");
    sqDiv.setAttribute("style", `width: ${95/dimension}%; height: ${97/dimension}%;`);
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
