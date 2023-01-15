let currentPlayer = "O";
    let won = false;
    function place(box) {
      if(box.innerText != "" || won) return;
      box.innerText = currentPlayer;
      currentPlayer == "O" ? currentPlayer = "X" : currentPlayer = "O";
      checkGameBoard();   
    }
    function checkGameBoard() {
      for(let i = 0; i <= 2; i++) {
        //vertical checking
        checkWinner(document.getElementById(i + "_0").innerText,
          document.getElementById(i + "_1").innerText,
          document.getElementById(i + "_2").innerText);
          //horizontal checking
        checkWinner(document.getElementById("0_" + i).innerText,
          document.getElementById("1_" + i).innerText,
          document.getElementById("2_" + i).innerText);
      }
      //diagonal checking
      checkWinner(document.getElementById("0_0").innerText,
        document.getElementById("1_1").innerText,
        document.getElementById("2_2").innerText);
        //diagonal checking
      checkWinner(document.getElementById("0_2").innerText,
        document.getElementById("1_1").innerText,
        document.getElementById("2_0").innerText);
    }
    //checkwinner function 3 arguments
    function checkWinner(first, second, third) {
      if(first != "" && first == second && first == third) {
        alert("Winner!");
        won = true;
      }
    }