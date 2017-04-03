## Connect Four Pseudocode

### Initialize variables
* Gameboard (array of arrays representing columns)
* Message
* Current player
* Winner

---

### Game start
* On start function, all spaces on the 6 (down) x 7 (across) gameboard (values in the array) start with a value of 0. Gameboard and reset button are set up to listen for user clicks

### Current player's turn
* Gameboard listens for current player's click, which drops a game piece in chosen column
	* Current player's click drops their game piece into gameboard
	* If value of bottom cell is not 0, current player's game piece will be placed in next available cell in column
	* When current player chooses column, array's values are updated (with either a 1 or -1 depending on who current player is) to reflect chosen space
* After each click, render function runs to grab DOM element of chosen cell and update displayed gameboard with current player's game piece
	* Win function runs to check whether current player made a winning move. Players can win if four of their colored game pieces appear consecutively by row, column or diagonal
		* If current player does not make a winning move, switch player function will run and alert other player of their turn
		* If current player does make a winning move, they are notified and prompted to reset the game
		* Upon player win, gameboard's event listeners are removed until reset function runs

### Check for tie
* If win conditions are not met, tie function will run to check that gameboard's values are all either 1 or -1
	* Players are alerted of tie and prompted to reset game

### Reset game
* Reset function removes all event listeners and sets all values in gameboard back to 0
	* Render function runs to reflect array's values and clear gameboard of game pieces
	* Start functions runs again