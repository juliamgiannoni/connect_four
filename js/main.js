var grid;
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

function startGame() { //adds click event listeners to gameboard
  console.log('New game started');
  grid = [
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0
  ];
  winner = '';
  currentPlayer = player1;
  selector.addEventListener('click', onSelectorClick);
  message.innerHTML = `Player Red's turn. Pick a column to drop your piece.`;
  for (var i = 0; i < gameBoard.length; i++) {
    gameBoard[i].addEventListener('click', updateBoard);
  }
  document.querySelector('button').innerHTML = 'RESET GAME';
  renderBoard();
}

function test() {
  var state = "[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,-1,1,0,0,0,0]"
  grid = JSON.parse(state);
  renderBoard();
}

function onSelectorClick(evt) {
  // console.log(evt.target);
  // grab the column number that you clicked on
  var column = evt.target.id;
  // use getColumnElements to grab ALL the elements of that column
  // getColumnElements(column);
  console.log('column =', column)
  var columnNumber = 0;
  if (column === 'column1') {
    console.log('grid[0]', grid[0])
    var column1 = [grid[0], grid[7], grid[14], grid[21], grid[28], grid[35]];
    console.log(column1);
    columnNumber = 0
  }
  if (column === 'column2') {
    console.log(grid[1], grid[8], grid[15], grid[22], grid[29], grid[36]);
  }
  if (column === 'column3') {
    console.log(grid[2], grid[9], grid[16], grid[23], grid[30], grid[37]);
  }
  if (column === 'column4') {
    console.log(grid[3], grid[10], grid[17], grid[24], grid[31], grid[38]);
  }
  if (column === 'column5') {
    console.log(grid[4], grid[11], grid[18], grid[25], grid[32], grid[39]);
  }
  if (column === 'column6') {
    console.log(grid[5], grid[12], grid[19], grid[26], grid[33], grid[40]);
  }
  if (column === 'column7') {
    console.log(grid[6], grid[13], grid[20], grid[27], grid[34], grid[41]);
  }

}


function getColumnElements(column) { //


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
    }
  }
  message.innerHTML = currentPlayer === player1 ? `Player Red's turn. Pick a column to drop your piece.` : `Player Yellow's turn. Pick a column to drop your piece.`;
  findWinner();
  renderBoard();
}

function renderBoard() {
  for (var i = 0; i < grid.length; i++) {
    if (grid[i]) {
      grid[i] === player1 ? gameBoard[i].innerHTML = '<img src="./assets/redpiece.png">' : gameBoard[i].innerHTML = '<img src="./assets/yellowpiece.png">';
    }
    if (!grid[i]) {
      gameBoard[i].innerHTML = '';
    }
  }
}


