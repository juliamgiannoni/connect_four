function getWinner(grid) {
  var allCombos = [];

  for (var k = 0; k < generateRows(grid).length; k++) {
    allCombos.push(generateRows(grid)[k]);
  }

  // push all diagonals into allCombos
  var allDiagonals = generateAllDiagonals(grid)
  for (var i = 0; i < allDiagonals.length; i++) {
    allCombos.push(allDiagonals[i]);
  }

  // push all columns into allCombos
  for (var i = 0; i < grid.length; i++) {
    allCombos.push(grid[i]);
  }

  //use get four consec function to look inside each combo of all combos
  for (var i = 0; i < allCombos.length; i++) {
    var combo = allCombos[i];
    var result = isFourConsec(combo);
    if (result) {
      return result;
    }
  }
  return false

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
console.log(generateRows(grid))
  renderBoard(grid);
  getWinner(grid)
}

function generateRows(grid) { //converts array from column form to row form
  var allRows = [];
  var cols = grid[0].length;
  var rows = grid.length;
  grid[0].forEach(function (outerElem, i) {
    var row = [];
    grid.forEach(function(innerElem, j) {
      row.push(grid[j][i]);
    })
    allRows.push(row);
  });
  return allRows;
}

function stepUp(starting_point, grid) {
  var diagonal = [];
  var i = starting_point[0];
  var j = starting_point[1];
  var i_length = grid.length - 1;
  var j_length = grid[0].length - 1;
  while (i >= 0 && j >= 0) {
    diagonal.push(grid[i][j]);
    i-=1;
    j-=1;
  }
  return diagonal;
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

function generateAllDiagonals(grid) {
  var allDiagonals = [];
  allDiagonals.push(stepDown([0, 5], grid));
  allDiagonals.push(stepDown([0, 4], grid));
  allDiagonals.push(stepDown([0, 3], grid));
  allDiagonals.push(stepDown([0, 2], grid));
  allDiagonals.push(stepDown([0, 1], grid));
  allDiagonals.push(stepDown([0, 0], grid));
  allDiagonals.push(stepDown([1, 5], grid));
  allDiagonals.push(stepDown([2, 5], grid));
  allDiagonals.push(stepDown([3, 5], grid));
  allDiagonals.push(stepDown([4, 5], grid));
  allDiagonals.push(stepDown([5, 5], grid));
  allDiagonals.push(stepDown([6, 5], grid));
  allDiagonals.push(stepUp([6, 5], grid));
  allDiagonals.push(stepUp([6, 4], grid));
  allDiagonals.push(stepUp([6, 3], grid));
  allDiagonals.push(stepUp([6, 2], grid));
  allDiagonals.push(stepUp([6, 1], grid));
  allDiagonals.push(stepUp([6, 0], grid));
  allDiagonals.push(stepUp([5, 5], grid));
  allDiagonals.push(stepUp([4, 5], grid));
  allDiagonals.push(stepUp([3, 5], grid));
  allDiagonals.push(stepUp([2, 5], grid));
  allDiagonals.push(stepUp([1, 5], grid));
  allDiagonals.push(stepUp([0, 5], grid));
  return allDiagonals

}

function getFourConsec(array) { //grabs four consecutive spaces within each array
  var comparisons = [];
  i = 0;
  j = 4;
  // j - i = 4;
  while (j <= array.length) {
    comparisons.push(array.slice(i, j));
    j = j + 1;
    i = i + 1;
  }
  return comparisons;
}

function sum(array) {
  return array.reduce(function(a, b) {
    return (a + b);
  });
}

function isFourConsec(array) {
  var consecSet = getFourConsec(array);
  for (var i = 0; i < consecSet.length; i++) {
    if (sum(consecSet[i]) === 4) return 'player1';
    if (sum(consecSet[i]) === -4) return 'player2';
  }
  return false;
}
