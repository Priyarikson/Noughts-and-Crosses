let currentPlayer = "O";
function place(box) {
    if(box.innerText !== "") return;
    box.innerText = currentPlayer;
    currentPlayer === "O" ? currentPlayer = "X" : currentPlayer = "O";
}