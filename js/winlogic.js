function getWinner() {
  //grab different arrays - horizontal, veritcal, diagonal
  //check if different arrays are equal to four
  getFourConsec(array)
}

function getFourConsec(array) { //grabs four consecutive spaces within each array
  var comparisons = [];
  i = 0;
  j = 4;
  // j - i = 4;
  while (i < 6) {
    comparisons.push(slice(i, j));
    j = j + 1;
    i = i + 1;
  }
}

function createRows(grid) { //converts array from column form to row form
  var rowGrid = [];
  for (var i = 0; i < grid[0].length; i++) {
    for (var k = 0; k < grid.length; k++) {
      rowGrid.push(grid[k][i]);
    }
  }
  return rowGrid;
}

function createDiagonals(grid) { //converts array from column form to diagonal form
  var diagGrid = [];

}

function findWinner(grid) {
  // grid = flattenArray(grid);

  // by rows
  for (var i = 0; i < grid.length; i = i + 7) {
    if (grid[i] + grid[i+1] + grid[i+2] + grid[i+3] === 4) {
      winner = player1;
    }
    if (grid[i] + grid[i+1] + grid[i+2] + grid[i+3] === -4) {
      winner = player2;
    }
  }
  for (var i = 1; i < grid.length; i = i + 7) {
    if (grid[i] + grid[i+1] + grid[i+2] + grid[i+3] === 4) {
      winner = player1;
    }
    if (grid[i] + grid[i+1] + grid[i+2] + grid[i+3] === -4) {
      winner = player2;
    }
  }
  for (var i = 2; i < grid.length; i = i + 7) {
    if (grid[i] + grid[i+1] + grid[i+2] + grid[i+3] === 4) {
      winner = player1;
    }
    if (grid[i] + grid[i+1] + grid[i+2] + grid[i+3] === -4) {
      winner = player2;
    }
  }
  for (var i = 3; i < grid.length; i = i + 7) {
    if (grid[i] + grid[i+1] + grid[i+2] + grid[i+3] === 4) {
      winner = player1;
    }
    if (grid[i] + grid[i+1] + grid[i+2] + grid[i+3] === -4) {
      winner = player2;
    }
  }

  // by columns
  for (var i = 0; i < grid.length; i++) {
    if (grid[i] + grid[i+7] + grid[i+14] + grid[i+21] === 4) {
      winner = player1;
    }
    if (grid[i] + grid[i+7] + grid[i+14] + grid[i+21] === -4) {
      winner = player2;
    }
  }

  // by diagonals
  for (var i = 0; i < 4; i++) {
    if (grid[i] + grid[i+8] + grid[i+16] + grid[i+24] === 4) {
      winner = player1;
    }
    if (grid[i] + grid[i+8] + grid[i+16] + grid[i+24] === -4) {
      winner = player2;
    }
  }
  for (var i = 7; i < 11; i++) {
    if (grid[i] + grid[i+8] + grid[i+16] + grid[i+24] === 4) {
      winner = player1;
    }
    if (grid[i] + grid[i+8] + grid[i+16] + grid[i+24] === -4) {
      winner = player2;
    }
  }
  for (var i = 14; i < 18; i++) {
    if (grid[i] + grid[i+8] + grid[i+16] + grid[i+24] === 4) {
      winner = player1;
    }
    if (grid[i] + grid[i+8] + grid[i+16] + grid[i+24] === -4) {
      winner = player2;
    }
  }
  for (var i = 3; i < 7; i++) {
    if (grid[i] + grid[i+6] + grid[i+12] + grid[i+18] === 4) {
      winner = player1;
    }
    if (grid[i] + grid[i+6] + grid[i+12] + grid[i+18] === -4) {
      winner = player2;
    }
  }
  for (var i = 10; i < 14; i++) {
    if (grid[i] + grid[i+6] + grid[i+12] + grid[i+18] === 4) {
      winner = player1;
    }
    if (grid[i] + grid[i+6] + grid[i+12] + grid[i+18] === -4) {
      winner = player2;
    }
  }
  for (var i = 17; i < 21; i++) {
    if (grid[i] + grid[i+6] + grid[i+12] + grid[i+18] === 4) {
      winner = player1;
    }
    if (grid[i] + grid[i+6] + grid[i+12] + grid[i+18] === -4) {
      winner = player2;
    }
  }

  if (winner) {
    message.innerHTML = winner === player1 ? `Player Red wins! Reset game.` : `Player Yellow wins! Reset game.`;
    selector.removeEventListener('click', updateBoard);
  } else {
    checkForTie(grid);
  }
}

function checkForTie(grid) {
  var grid = flattenArray(grid);
  var checkForZeros = grid.find(function(element) {
    return element === 0;
  });
  if (checkForZeros !== 0) {
    message.innerHTML = `Game is tied. Reset game.`;
  }
}
