let cells = document.querySelectorAll("div.row > div");
for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked);
}

var turn = "x";
var wonTheGame = false;
var numOfMoves = 0;
function cellClicked() {
    if(event.target.textContent > ""){
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
    if (cells[0].textContent === cells[1].textContent &&
        cells[1].textContent === cells[2].textContent &&
        (cells[0].textContent === "x" ||
            cells[0].textContent === "o")) {
        document.querySelector("h2").innerHTML = cells[0].textContent.toUpperCase() + " HAS WON THE GAME!";
        wonTheGame = true;
    }
    if (cells[3].textContent === cells[4].textContent &&
        cells[4].textContent === cells[5].textContent &&
        (cells[3].textContent === "x" ||
            cells[3].textContent === "o")) {
        document.querySelector("h2").innerHTML = cells[3].textContent.toUpperCase() + " HAS WON THE GAME!";
        wonTheGame = true;
    }
    if (cells[6].textContent === cells[7].textContent &&
        cells[7].textContent === cells[8].textContent &&
        (cells[6].textContent === "x" ||
            cells[6].textContent === "o")) {
        document.querySelector("h2").innerHTML = cells[6].textContent.toUpperCase() + " HAS WON THE GAME!";
        wonTheGame = true;
    }
    if (cells[0].textContent === cells[4].textContent &&
        cells[4].textContent === cells[8].textContent &&
        (cells[0].textContent === "x" ||
            cells[0].textContent === "o")) {
        document.querySelector("h2").innerHTML = cells[0].textContent.toUpperCase() + " HAS WON THE GAME!";
        wonTheGame = true;
    }
    if (cells[2].textContent === cells[4].textContent &&
        cells[4].textContent === cells[6].textContent &&
        (cells[2].textContent === "x" ||
            cells[2].textContent === "o")) {
        document.querySelector("h2").innerHTML = cells[2].textContent.toUpperCase() + " HAS WON THE GAME!";
        wonTheGame = true;
    }
    if (cells[0].textContent === cells[3].textContent &&
        cells[3].textContent === cells[6].textContent &&
        (cells[0].textContent === "x" ||
            cells[0].textContent === "o")) {
        document.querySelector("h2").innerHTML = cells[0].textContent.toUpperCase() + " HAS WON THE GAME!";
        wonTheGame = true;
    }
    if (cells[1].textContent === cells[4].textContent &&
        cells[4].textContent === cells[7].textContent &&
        (cells[1].textContent === "x" ||
            cells[1].textContent === "o")) {
        document.querySelector("h2").innerHTML = cells[1].textContent.toUpperCase() + " HAS WON THE GAME!";
        wonTheGame = true;
    }
    if (cells[2].textContent === cells[5].textContent &&
        cells[5].textContent === cells[8].textContent &&
        (cells[2].textContent === "x" ||
            cells[2].textContent === "o")) {
        document.querySelector("h2").innerHTML = cells[2].textContent.toUpperCase() + " HAS WON THE GAME!";
        wonTheGame = true;
    }
    if (wonTheGame === false && numOfMoves === 9) {
        document.querySelector("h2").innerHTML = "DRAW PLAY AGAIN!";
    }
    function restartGame(){
        document.location.reload();
    }
}


