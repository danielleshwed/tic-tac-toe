var winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function checkGameState(gameState) {
  let potentialWinner;
  for (let i = 0; i < winningCombos.length; i++) {
    for (let j = 0; j < winningCombos[i].length; j++) {
      // get index to check game state for
      let index = winningCombos[i][j];

      //if gameState[index] === "" its an empty state
      if (gameState[index] === "") break;

      // set inital potential winner
      if (j === 0) {
        potentialWinner = gameState[index];
      }
      // if the next item in the winningCombo array is not the same
      // as the last item, break out of the loop
      else if (gameState[index] !== potentialWinner) {
        potentialWinner = undefined;
        break;
      }
      // if we are at the end of checking the current winning combo
      // it means someone has won!
      else if (
        gameState[index] === potentialWinner &&
        j === winningCombos[i].length - 1
      ) {
        return potentialWinner;
      }
    }
  }

  return undefined;
}
