var array;
var currentPlayer;
var player1 = 1;
var player2 = -1;
var winner;
var message = document.querySelector('#message')
var gameBoard = document.getElementsByClassName('squares')

initialize();

function initialize() {
  document.querySelector('#newgame').addEventListener('click', startGame);
}

function startGame() { //adds click event listeners to gameboard
  alert('new game started');
  array = [
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0
  ];
  currentPlayer = player1;
  for (var i = 0; i < gameBoard.length; i++) {
    gameBoard[i].addEventListener('click', updateBoard);
  }
  message.innerHTML = 'Player ' + currentPlayer + `'s turn. Pick a column to drop your piece.`;
  // run render logic
}


function updateBoard(evt) {
  var square = evt.target.id;
  var value = currentPlayer === player1 ? 1 : -1;
  if (array[square] === 0) {
    if (currentPlayer === player1) {
      array[square] = value;
      currentPlayer = player2;
      //run win logic
    } else {
      array[square] = value;
      currentPlayer = player1;
      //run win logic
    }
  } else {
      alert("Already taken. Play another cell.");
  } message.innerHTML = 'Player ' + currentPlayer + `'s turn. Pick a column to drop your piece.`;
  console.log(array);
  // run render logic
}




