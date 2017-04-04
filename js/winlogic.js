function findWinner() {
  // by rows
  for (var i = 0; i < grid.length; i = i + 7) {
    if (grid[i] + grid[i+1] + grid[i+2] + grid[i+3] === 4) {
      winner = player1;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
    if (grid[i] + grid[i+1] + grid[i+2] + grid[i+3] === -4) {
      winner = player2;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
  }
  for (var i = 1; i < grid.length; i = i + 7) {
    if (grid[i] + grid[i+1] + grid[i+2] + grid[i+3] === 4) {
      winner = player1;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
    if (grid[i] + grid[i+1] + grid[i+2] + grid[i+3] === -4) {
      winner = player2;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
  }
  for (var i = 2; i < grid.length; i = i + 7) {
    if (grid[i] + grid[i+1] + grid[i+2] + grid[i+3] === 4) {
      winner = player1;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
    if (grid[i] + grid[i+1] + grid[i+2] + grid[i+3] === -4) {
      winner = player2;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
  }
  for (var i = 3; i < grid.length; i = i + 7) {
    if (grid[i] + grid[i+1] + grid[i+2] + grid[i+3] === 4) {
      winner = player1;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
    if (grid[i] + grid[i+1] + grid[i+2] + grid[i+3] === -4) {
      winner = player2;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
  }

  // by columns
  for (var i = 0; i < grid.length; i++) {
    if (grid[i] + grid[i+7] + grid[i+14] + grid[i+21] === 4) {
      winner = player1;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
    if (grid[i] + grid[i+7] + grid[i+14] + grid[i+21] === -4) {
      winner = player2;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
  }

  // by diagonals
  for (var i = 0; i < 4; i++) {
    if (grid[i] + grid[i+8] + grid[i+16] + grid[i+24] === 4) {
      winner = player1;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
    if (grid[i] + grid[i+8] + grid[i+16] + grid[i+24] === -4) {
      winner = player2;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
  }
  for (var i = 7; i < 11; i++) {
    if (grid[i] + grid[i+8] + grid[i+16] + grid[i+24] === 4) {
      winner = player1;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
    if (grid[i] + grid[i+8] + grid[i+16] + grid[i+24] === -4) {
      winner = player2;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
  }
  for (var i = 14; i < 18; i++) {
    if (grid[i] + grid[i+8] + grid[i+16] + grid[i+24] === 4) {
      winner = player1;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
    if (grid[i] + grid[i+8] + grid[i+16] + grid[i+24] === -4) {
      winner = player2;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
  }
  for (var i = 3; i < 7; i++) {
    if (grid[i] + grid[i+6] + grid[i+12] + grid[i+18] === 4) {
      winner = player1;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
    if (grid[i] + grid[i+6] + grid[i+12] + grid[i+18] === -4) {
      winner = player2;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
  }
  for (var i = 10; i < 14; i++) {
    if (grid[i] + grid[i+6] + grid[i+12] + grid[i+18] === 4) {
      winner = player1;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
    if (grid[i] + grid[i+6] + grid[i+12] + grid[i+18] === -4) {
      winner = player2;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
  }
  for (var i = 17; i < 21; i++) {
    if (grid[i] + grid[i+6] + grid[i+12] + grid[i+18] === 4) {
      winner = player1;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
    if (grid[i] + grid[i+6] + grid[i+12] + grid[i+18] === -4) {
      winner = player2;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
  }
}
