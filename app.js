const cells = document.querySelectorAll("div.row > div");
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked);
}

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];


let turn = "x";
let wonTheGame = false;
let numOfMoves = 0;
function cellClicked() {
    if (event.target.textContent > "") {
        return
    }
    numOfMoves += 1;
    event.target.textContent = turn;
    if (turn === "x") {
        turn = "o";
    }
    else {
        turn = "x";
    }

    for (let i = 0; i < winConditions.length; i++) {
        if (cells[winConditions[i][0]].textContent === cells[winConditions[i][1]].textContent &&
            cells[winConditions[i][1]].textContent === cells[winConditions[i][2]].textContent &&
            (cells[winConditions[i][0]].textContent === "x" ||
                cells[winConditions[i][0]].textContent === "o")) {
            document.querySelector("h2").innerHTML = cells[2].textContent.toUpperCase() + " HAS WON THE GAME!";
            wonTheGame = true;
            document.querySelector("button").style.display = "block";
        }
    }

    if (wonTheGame === false && numOfMoves === 9) {
        document.querySelector("h2").innerHTML = "DRAW PLAY AGAIN!";
        document.querySelector("button").style.display = "block";
    }
}
function restartGame() {
    document.location.reload();
}


