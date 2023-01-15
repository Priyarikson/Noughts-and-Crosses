let currentPlayer = "O";
function place(box) {
    if(box.innerText !== "") return;
    box.innerText = currentPlayer;
    currentPlayer === "O" ? currentPlayer = "X" : currentPlayer = "O";
    checkGameBoard()
}

function checkGameBoard() {
    for(let i=0; i<=2; i++) {
        let first = document.getElementById("0_" + i).innerText;
        let second = document.getElementById("1_" + i).innerText;
        let third = document.getElementById("2_" + i).innerText;
        if(first === "") continue;
        if(first === second && first === third) {
            alert("winner");
        }
    }
    for(let j=0; j<=2; j++) {
        let first1 = document.getElementById( j + "_0" ).innerText;
        let second2 = document.getElementById( j + "_1" ).innerText;
        let third3 = document.getElementById( j + "_2" ).innerText;
        if(first1 === "") continue;
        if(first1 === second2 && first1 === third3) {
            alert("winner");
        }
    }
}