const container = document.querySelector(".container");


// Vraagt welke grid je wilt maken
let numSquares = 0;
let squareSquared = 0;
function askNmbSquares() {
    numSquares = prompt("Pick number of rows/columns for your Sketchboard");
    if (isNaN(numSquares)) {
        alert("You have to pick a number!");
        askNmbSquares();
    } else if (numSquares > 50) {
        alert("Please choose a value of 50 or lower");
        askNmbSquares();
    } else {
        squareSquared = numSquares ** 2;
        grid();
    }
}

// Functie maakt aantal squares als div
function grid() {
    for (i = 0; i < squareSquared; i++) {
        const square = document.createElement('div');
        square.classList.add("square");
        container.appendChild(square);
    }
    containerProperties(numSquares);
}

function containerProperties(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}



askNmbSquares();

//zoekt in container div naar .square, voegt class toe welke kleur aanpast
container.addEventListener("mouseover", function (e) {
    if (e.target.matches(".square")) {
        e.target.classList.add("coloredsquare");
    }
})

//resetbutton maakt container div helemaal leeg qua html en roept functie weer
const resetButton = document.querySelector(".rstbutton");
resetButton.addEventListener("click", () => {
    container.innerHTML = "";
    askNmbSquares();
}
);


