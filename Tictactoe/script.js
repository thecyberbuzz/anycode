const cells = document.querySelectorAll(".cell");
const result = document.getElementById("result");
const resetButton = document.getElementById("reset");

let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

// Add event listeners to each cell
cells.forEach((cell, index) => {
    cell.addEventListener("click", () => cellClick(index));
});

// Handle cell clicks
function cellClick(index) {
    if (gameBoard[index] === "" && gameActive) {
        gameBoard[index] = currentPlayer;
        cells[index].textContent = currentPlayer;
        if (checkWin()) {
            result.textContent = `${currentPlayer} wins!`;
            gameActive = false;
        } else if (gameBoard.indexOf("") === -1) {
            result.textContent = "It's a draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

// Check for a win
function checkWin() {
    const winCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combination of winCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
            return true;
        }
    }
    return false;
}

// Reset the game
resetButton.addEventListener("click", resetGame);

function resetGame() {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    cells.forEach((cell) => {
        cell.textContent = "";
    });
    result.textContent = "";
    currentPlayer = "X";
    gameActive = true;
}

// Initialize the game
resetGame();
