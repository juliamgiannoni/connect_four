var oldGrid = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ];

function updateGrid(grid, selectedColumn, value) {
 for (var i=grid[selectedColumn].length - 1; i >= 0; i--) {
   if (grid[selectedColumn][i] === 0) {
     grid[selectedColumn][i] = value;
     return grid;
   }
 }
 return grid;
}

function flattenArray(oldGrid) {
  var length = oldGrid.length * oldGrid[0].length;
  var flat = new Array(length);
  var period = oldGrid.length;

  for (var i = 0; i < oldGrid.length ; i++) {
    for (var k = 0; k < oldGrid[i].length; k++) {
      var q = i + (period * k);
      flat[q] = oldGrid[i][k];
    }
  }
  return flat;
}
