function getWinner() {

  // createRows(grid);
  // getFourConsec(grid);

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

function test() {
  grid = [
    [0,        1,       1,       -1,      1,        -1],

    [0,        0,       1,       1,      -1,         1],

    [0,        0,       -1,      1,      -1,        -1],

    [0,        0,       0,       -1,      1,         1],

    [0,        0,       0,       1,      -1,        -1],

    [0,        0,       0,       0,      -1,         1],

    [0,        0,       0,       0,       0,         0]
  ];
  renderBoard(grid);
  console.log(stepUp([6, 5], grid));
}

function generateAllDiagonals(grid) {
  var allDiagonals = [];
  grid[0].forEach(function(element, index) {
    allDiagonals.push(stepDown([0, index], grid));
  })
  // grid.forEach(function(element, index) {
  //   allDiagonals.push(stepDown([index, 0], grid));
  // })
  console.log(allDiagonals);
}

function stepDown(starting_point, grid) {
  var diagonal = [];
  var i = starting_point[0];
  var j = starting_point[1];
  var i_length = grid.length - 1;
  var j_length = grid[0].length - 1;
  diagonal.push(grid[i][j]);
  while (i < i_length && j > 0) {
    i+=1;
    j-=1;
    diagonal.push(grid[i][j]);
  }
  return diagonal;
}

function stepUp(starting_point, grid) {
  var diagonal = [];
  var i = starting_point[0];
  var j = starting_point[1];
  var i_length = grid.length - 1;
  var j_length = grid[0].length - 1;
  diagonal.push(grid[i][j]);
  while (i < i_length && j < j_length) {
    i-=1;
    j+=1;
    diagonal.push(grid[i][j]);
  }
  return diagonal;
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

function sum(array) {
  return array.reduce(a, b);
    return (a + b);
}

function isFourConsec(array) {
  var consecSet = getFourConsec(array);
  for (var i = 0; i < consecSet.length; i++) {
    if (sum(consecSet[i]) === 4) return 'player1';
    if (sum(consecSet[i]) === -4) return 'player2';
  }
  return false;
}
