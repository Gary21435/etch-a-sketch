const container = document.querySelector(".container");

let numSquares = 16*16; // 16x16 grid

let sqArr = new Array(numSquares);

for(let i = 0; i<numSquares; i++) {
    const sqDiv = document.createElement("div");
    container.appendChild(sqDiv);

    sqArr.push(sqDiv);
    sqDiv.setAttribute("id", "sq" + String(i)); // set unique number ID to each square
    sqDiv.setAttribute("class", "square");
}

function handleHover(e) {
    const square = e.target;
    // console.log(square.className);
    if(square.className == "square")
        square.style.backgroundColor = "aqua";
}

container.addEventListener("mouseover", (e) => handleHover(e));
