// This line selects the HTML element with the id of "sudoku-board" and adds a keyup event listener to it.
document.getElementById("sudoku-board").addEventListener("keyup", function(event) {
    // This line checks if the event has a target element and if that element is a table cell (<td>).
    if(event.target && event.target.nodeName == "TD") {
      // This line creates a regular expression that matches any digit from 1 to 9.
      var validNum = /[1-9]/;
      // This line assigns the target element to a variable called tdEl.
      var tdEl = event.target;
      // This line checks if the target element has some text inside and if the first character of that text is a valid digit according to the regular expression.
      if (tdEl.innerText.length > 0 && validNum.test(tdEl.innerText[0])) {
        // This line sets the text of the target element to be only the first character (to prevent entering more than one digit in a cell).
        tdEl.innerText = tdEl.innerText[0];
      } else {
        // This line clears the text of the target element.
        tdEl.innerText = "";
      }
    }
  });


  document.getElementById("solve-button").addEventListener("click", function(event) {
    var boardString = boardToString();
    var solution = SudokuSolver.solve(boardString);
    if (solution) {
      stringToBoard(solution);
    } else {
      alert("Invalid board!");
    }
  })

  document.getElementById("clear-button").addEventListener("click", clearBoard);

  function clearBoard() {
    var tds = document.getElementsByTagName("td");
    for (var i = 0; i < tds.length; i++) {
      tds[i].innerText = "";
    }
  }

  
  function boardToString() {
    var string = "";
    var validNum = /[1-9]/;
    var tds = document.getElementsByTagName("td");
    for (var i = 0; i < tds.length; i++) {
      if (validNum.test(tds[i].innerText[0])) {
        string += tds[i].innerText;
      } else {
        string += "-";
      }
    }
    return string;
  }

  function stringToBoard(string) {
    var currentCell;
    var validNum = /[1-9]/;
    var cells = string.split("");
    var tds = document.getElementsByTagName("td");
    for (var i = 0; i < tds.length; i++) {
      currentCell = cells.shift();
      if (validNum.test(currentCell)) {
        tds[i].innerText = currentCell;
      }
    }
  }









