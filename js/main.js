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
  getColumnElements(column);
  console.log(column);

}


function getColumnElements(column) { //
  for (var i = 0; i < grid.length; i = i + 7) {
    var firstColumn = document.querySelector('#column1');
    firstColumn = firstColumn + grid[i];
  }
  for (var i = 1; i < grid.length; i = i + 7) {
    var secondColumn = document.querySelector('#column2');
    secondColumn = secondColumn + grid[i];
  }
  for (var i = 2; i < grid.length; i = i + 7) {
    var thirdColumn = document.querySelector('#column3');
    thirdColumn = thirdColumn + grid[i];
  }
  for (var i = 3; i < grid.length; i = i + 7) {
    var fourthColumn = document.querySelector('#column4');
    fourthColumn = fourthColumn + grid[i];
  }
  for (var i = 4; i < grid.length; i = i + 7) {
    var fifthColumn = document.querySelector('#column5');
    fifthColumn = fifthColumn + grid[i];
  }
  for (var i = 5; i < grid.length; i = i + 7) {
    var sixthColumn = document.querySelector('#column6');
    sixthColumn = sixthColumn + grid[i];
  }
  for (var i = 6; i < grid.length; i = i + 7) {
    var seventhColumn = document.querySelector('#column7');
    seventhColumn = seventhColumn + grid[i];
  }
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


