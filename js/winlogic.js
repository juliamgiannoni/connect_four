function findWinner() {
  // by rows
  for (var i = 0; i < array.length; i = i + 7) {
    if (array[i] + array[i+1] + array[i+2] + array[i+3] === 4) {
      winner = player1;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
    if (array[i] + array[i+1] + array[i+2] + array[i+3] === -4) {
      winner = player2;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
  }
  for (var i = 1; i < array.length; i = i + 7) {
    if (array[i] + array[i+1] + array[i+2] + array[i+3] === 4) {
      winner = player1;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
    if (array[i] + array[i+1] + array[i+2] + array[i+3] === -4) {
      winner = player2;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
  }
  for (var i = 2; i < array.length; i = i + 7) {
    if (array[i] + array[i+1] + array[i+2] + array[i+3] === 4) {
      winner = player1;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
    if (array[i] + array[i+1] + array[i+2] + array[i+3] === -4) {
      winner = player2;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
  }
  for (var i = 3; i < array.length; i = i + 7) {
    if (array[i] + array[i+1] + array[i+2] + array[i+3] === 4) {
      winner = player1;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
    if (array[i] + array[i+1] + array[i+2] + array[i+3] === -4) {
      winner = player2;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
  }

  // by columns
  for (var i = 0; i < array.length; i++) {
    if (array[i] + array[i+7] + array[i+14] + array[i+21] === 4) {
      winner = player1;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
    if (array[i] + array[i+7] + array[i+14] + array[i+21] === -4) {
      winner = player2;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
  }

  // by diagonals
  for (var i = 0; i < 4; i++) {
    if (array[i] + array[i+8] + array[i+16] + array[i+24] === 4) {
      winner = player1;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
    if (array[i] + array[i+8] + array[i+16] + array[i+24] === -4) {
      winner = player2;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
  }
  for (var i = 7; i < 11; i++) {
    if (array[i] + array[i+8] + array[i+16] + array[i+24] === 4) {
      winner = player1;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
    if (array[i] + array[i+8] + array[i+16] + array[i+24] === -4) {
      winner = player2;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
  }
  for (var i = 14; i < 18; i++) {
    if (array[i] + array[i+8] + array[i+16] + array[i+24] === 4) {
      winner = player1;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
    if (array[i] + array[i+8] + array[i+16] + array[i+24] === -4) {
      winner = player2;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
  }
  for (var i = 3; i < 7; i++) {
    if (array[i] + array[i+6] + array[i+12] + array[i+18] === 4) {
      winner = player1;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
    if (array[i] + array[i+6] + array[i+12] + array[i+18] === -4) {
      winner = player2;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
  }
  for (var i = 10; i < 14; i++) {
    if (array[i] + array[i+6] + array[i+12] + array[i+18] === 4) {
      winner = player1;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
    if (array[i] + array[i+6] + array[i+12] + array[i+18] === -4) {
      winner = player2;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
  }
  for (var i = 17; i < 21; i++) {
    if (array[i] + array[i+6] + array[i+12] + array[i+18] === 4) {
      winner = player1;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
    if (array[i] + array[i+6] + array[i+12] + array[i+18] === -4) {
      winner = player2;
      console.log(winner + 'wins')
      message.innerHTML = 'Player ' + winner + ' wins!';
    }
  }
}
