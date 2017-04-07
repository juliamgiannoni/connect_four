var grid = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  ];
var dict = {
  'column1': 0,
  'column2': 1,
  'column3': 2,
  'column4': 3,
  'column5': 4,
  'column6': 5,
  'column7': 6
  }
var currentPlayer;
var player1 = 1;
var player2 = -1;
var winner;
var message = document.querySelector('#message')
var gameBoard = document.getElementsByClassName('square')
var selector = document.querySelector('#columnselector')
var button = document.querySelector('#resetgame')

startGame();

function startGame() {
  winner = '';
  currentPlayer = player1;
  selector.addEventListener('click', updateBoard);
  button.addEventListener('click', resetGame);
  message.innerHTML = `Player Red's turn. Hover over a column and click to drop your disc.`;
  renderBoard(grid);
}

function updateBoard(evt) {
  var selectedColumn = dict[evt.target.id];
  if (selectedColumn === undefined) return;
  var value = currentPlayer === player1 ? 1 : -1;
  grid = updateGrid(grid, selectedColumn, value);
  currentPlayer = switchPlayer(currentPlayer);
  renderBoard(grid);
}

function switchPlayer(currentPlayer) {
  currentPlayer = currentPlayer * -1
  message.innerHTML = currentPlayer === player1 ? `Player Red's turn. Hover over a column and click to drop your disc.` : `Player Yellow's turn. Hover over a column and click to drop your disc.`;
  return currentPlayer;
}

function resetGame() {
  message.innerHTML = `Player Red's turn. Hover over a column and click to drop your disc.`;
  grid = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ];
  renderBoard(grid);
}

function renderBoard(grid) {
  var newGrid = flattenArray(grid);
  if (getWinner(grid) === 'player1') {
    message.innerHTML = 'Player Red wins! Reset game.';
  }
  if (getWinner(grid) === 'player2') {
    message.innerHTML = `Player Yellow wins! Reset game.`;
  }
  if (newGrid.indexOf(0) === -1) {
    message.innerHTML = `Game is tied! Reset game.`;
  }
  for (var i = 0; i < newGrid.length; i++) {
    if (newGrid[i]) {
      newGrid[i] === player1 ? gameBoard[i].innerHTML = '<img src="./assets/redpiece.png">' : gameBoard[i].innerHTML = '<img src="./assets/yellowpiece.png">';
    }
    if (!newGrid[i]) {
      gameBoard[i].innerHTML = '';
    }
  }
}
