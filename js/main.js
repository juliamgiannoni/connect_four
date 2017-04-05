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
  selector.addEventListener('click', updateBoard);
  message.innerHTML = `Player Red's turn. Pick a column to drop your piece.`;
  for (var i = 0; i < gameBoard.length; i++) {
    gameBoard[i].addEventListener('click', updateBoard);
  }
  document.querySelector('button').innerHTML = 'RESET GAME';
  renderBoard();
}

function test() {
  var state = '[-1, -1, 1, -1, -1, 0, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1]'
  grid = JSON.parse(state);
  renderBoard();
}

function onSelectorClick(evt) {
  // console.log(evt.target);
  // grab the column number that you clicked on
  var column = evt.target.id;
  // use getColumnElements to grab ALL the elements of that column
  console.log('column =', column)
  // var columnNumber;
  if (column === 'column1') {
    var firstColumn = [grid[0], grid[7], grid[14], grid[21], grid[28], grid[35]];
    console.log(firstColumn);
  }
  if (column === 'column2') {
    var secondColumn =[grid[1], grid[8], grid[15], grid[22], grid[29], grid[36]];
    console.log(secondColumn);
  }
  if (column === 'column3') {
    var thirdColumn = [grid[2], grid[9], grid[16], grid[23], grid[30], grid[37]];
    console.log(thirdColumn);
  }
  if (column === 'column4') {
    var fourthColumn = [grid[3], grid[10], grid[17], grid[24], grid[31], grid[38]];
    console.log(fourthColumn);
  }
  if (column === 'column5') {
    var fifthColumn = [grid[4], grid[11], grid[18], grid[25], grid[32], grid[39]];
    console.log(fifthColumn);
  }
  if (column === 'column6') {
    var sixthColumn = [grid[5], grid[12], grid[19], grid[26], grid[33], grid[40]];
    console.log(sixthColumn);
  }
  if (column === 'column7') {
    var seventhColumn = [grid[6], grid[13], grid[20], grid[27], grid[34], grid[41]];
    console.log(seventhColumn);
  }

  // getLastOpenSpot on that column

  // place the disk on that last spot

}

function getLastOpenSpot(columnNumber, columnArray) {
  // if column 1 is selected
var value = currentPlayer === player1 ? 1 : -1;
    for (var i = 5; i >= 0; i--) {
      if (firstColumn[i] === 0) {
        if (currentPlayer === player1) {
          firstColumn[i] = value;
          currentPlayer = player2;
        } else {
          grid[cell] = value;
          currentPlayer = player1;
        }
        //update the board with current player's value
        //stop for loop once value is placed
      } else { //if the first available column space is not equal to zero
        //continue the for loop and go to the next available column space

      }
    }

  // return [row, column]
}

function placeDisk(row, column) {
  // update the grid accordingly
  grid[35] = 1
}

// figure out a way to produce the row number of the last 0
  // examples: click on column id = 2 =>
    // say row = 3 (4th row)
    // we know we clicked on column 2 (3rd column)
    // write a function that spits out [3, 2]
  // example: click on column id = 1
    // row = 4
    // column = 1
    // spit out [4, 1]
  // example: click on column id = 0
    // row = 5
    // column = 0
    // spit out [5, 0]




function updateBoard(evt) {
  var selectedColumn = evt.target.id;
  var value = currentPlayer === player1 ? 1 : -1;
  if (selectedColumn === 'column1') {
    var firstColumn = [grid[0], grid[7], grid[14], grid[21], grid[28], grid[35]];
    console.log(firstColumn);
  }


  if (grid[35] === 0) {
      grid[35] = value;
  }
  if (grid[35] !== 0) {
      grid[28] = value;
      currentPlayer = player2;
  }

  // if (grid[35] !== 0) {
  //     if (currentPlayer === player1) {
  //       grid[28] = value;
  //       currentPlayer = player2;
  //     } else {
  //       grid[28] = value;
  //       currentPlayer = player1;
  //   }
  // }
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


