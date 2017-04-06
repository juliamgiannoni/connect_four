var grid = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  ];
var dict = { //converts column ids to numbers
  "column1": 0,
  "column2": 1,
  "column3": 2,
  "column4": 3,
  "column5": 4,
  "column6": 5,
  "column7": 6
  }
var currentPlayer;
var player1 = 1;
var player2 = -1;
var winner;
var message = document.querySelector('#message')
var gameBoard = document.getElementsByClassName('square')
var selector = document.querySelector('#columnselector')

initialize();

function initialize() {
  document.querySelector('#newgame').addEventListener('click', startGame);
}

function startGame() { //adds event listeners to column selectors
  console.log('New game started');
  winner = '';
  currentPlayer = player1;
  selector.addEventListener('click', updateBoard);
  message.innerHTML = `Player Red's turn. Pick a column to drop your piece.`;
  document.querySelector('button').innerHTML = 'RESET GAME';
  renderBoard(grid);
}

function updateBoard(evt) { //updates board with current player's values
  var selectedColumn = dict[evt.target.id];
  var value = currentPlayer === player1 ? 1 : -1;
  grid = updateGrid(grid, selectedColumn, value);
  renderBoard(grid);
  currentPlayer = switchPlayer(currentPlayer);
  message.innerHTML = currentPlayer === player1 ? `Player Red's turn. Pick a column to drop your piece.` : `Player Yellow's turn. Pick a column to drop your piece.`;
  findWinner();
  renderBoard(grid);
}

function switchPlayer(currentPlayer) { //switches between player 1 and player 2
  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  } return currentPlayer;
}

function renderBoard(grid) { //updates display of board to show red or yellow discs
  var newGrid = flattenArray(grid);
  for (var i = 0; i < newGrid.length; i++) {
    if (newGrid[i]) {
      newGrid[i] === player1 ? gameBoard[i].innerHTML = '<img src="./assets/redpiece.png">' : gameBoard[i].innerHTML = '<img src="./assets/yellowpiece.png">';
    }
    if (!newGrid[i]) {
      gameBoard[i].innerHTML = '';
    }
  }
}
