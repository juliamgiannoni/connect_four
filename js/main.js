var grid;
var currentPlayer;
var player1 = 1;
var player2 = -1;
var winner;
var message = document.querySelector('#message')
var gameBoard = document.getElementsByClassName('square')

initialize();

function initialize() {
  document.querySelector('#newgame').addEventListener('click', startGame);
}

function startGame() { //adds click event listeners to gameboard
  console.log('new game started');
  grid = [
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0
  ];
  currentPlayer = player1;
  winner = '';
  for (var i = 0; i < gameBoard.length; i++) {
    gameBoard[i].addEventListener('click', updateBoard);
  }
  message.innerHTML = 'Player ' + currentPlayer + `'s turn. Pick a column to drop your piece.`;
  render();
}


function updateBoard(evt) {
  var cell = evt.target.id;
  var value = currentPlayer === player1 ? 1 : -1;
  if (grid[cell] === 0) {
    if (currentPlayer === player1) {
      grid[cell] = value;
      currentPlayer = player2;
    } else {
      grid[cell] = value;
      currentPlayer = player1;
      //run win logic
    }
  } else {
      console.log("Already taken. Play another cell.");
  } message.innerHTML = 'Player ' + currentPlayer + `'s turn. Pick a column to drop your piece.`;
  console.log(grid);
  findWinner();
  console.log(cell);
  render();
}

function render() {
  for (var i = 0; i < grid.length; i++) {
    if (grid[i]) {
      grid[i] === player1 ? gameBoard[i].innerHTML = '<img src="./assets/redpiece.png">' : gameBoard[i].innerHTML = '<img src="./assets/yellowpiece.png">';
    }
    if (!grid[i]) {
      gameBoard[i].innerHTML = '';
    }
  }
}


